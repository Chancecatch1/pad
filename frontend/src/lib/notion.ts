/* CHANGE NOTE
Why: Notion API integration for fetching portfolio & CV data at build time
What changed: Using native fetch instead of @notionhq/client to avoid type issues
Behaviour/Assumptions: NOTION_API_KEY env var required
Rollback: Delete this file
— mj
*/

// Database and Page IDs
const PORTFOLIO_DB_ID = process.env.NOTION_PORTFOLIO_DB_ID || '18b7d9f7-3313-803e-841a-d9257848b01f';
const CV_PAGE_ID = process.env.NOTION_CV_PAGE_ID || '18b7d9f7-3313-80d7-9ab7-c0af9e1217e2';
const NOTION_API_KEY = process.env.NOTION_API_KEY;

// Types
export interface NotionPortfolioProject {
    id: string;
    slug: string;
    title: string;
    description: string;
    thumbnail?: string;
    github?: string;
    tags: string[];
    languages: string[];
    employer?: string;
    where?: string;
    status?: string;
    url: string;
}

export interface NotionCVData {
    aboutMe: string;
    education: Array<{
        institution: string;
        degree: string;
        period: string;
    }>;
    experience: Array<{
        company: string;
        role: string;
        period: string;
        description?: string;
    }>;
    skills: string[];
}

// Notion API base URL
const NOTION_API_BASE = 'https://api.notion.com/v1';

// Helper for Notion API requests
async function notionFetch(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${NOTION_API_BASE}${endpoint}`, {
        ...options,
        headers: {
            'Authorization': `Bearer ${NOTION_API_KEY}`,
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });

    if (!response.ok) {
        throw new Error(`Notion API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

// Helper to extract plain text from rich text array
function extractPlainText(richText: Array<{ plain_text: string }>): string {
    return richText?.map((rt) => rt.plain_text).join('') || '';
}

// Helper to extract URL from rich text
function extractUrl(richText: Array<{ plain_text: string; href?: string; text?: { link?: { url: string } } }>): string | undefined {
    for (const rt of richText || []) {
        if (rt.text?.link?.url) {
            return rt.text.link.url;
        }
        if (rt.href) {
            return rt.href;
        }
    }
    return undefined;
}

// Fetch portfolio projects from Notion database
export async function getProjects(): Promise<NotionPortfolioProject[]> {
    if (!NOTION_API_KEY) {
        console.warn('NOTION_API_KEY not set, returning empty projects');
        return [];
    }

    try {
        const response = await notionFetch(`/databases/${PORTFOLIO_DB_ID}/query`, {
            method: 'POST',
            body: JSON.stringify({
                filter: {
                    property: 'show',
                    checkbox: {
                        equals: true,
                    },
                },
                sorts: [{ property: 'When', direction: 'descending' }],
            }),
        });

        const projects: NotionPortfolioProject[] = [];

        for (const page of response.results) {
            if (page.object !== 'page') continue;
            const props = page.properties;

            // Extract title
            const titleProp = props['Name'];
            const title = titleProp?.type === 'title'
                ? extractPlainText(titleProp.title)
                : 'Untitled';

            // Extract description
            const descProp = props['Description'];
            const description = descProp?.type === 'rich_text'
                ? extractPlainText(descProp.rich_text)
                : '';

            // Extract GitHub URL
            const gitProp = props['Git'];
            const github = gitProp?.type === 'rich_text'
                ? extractUrl(gitProp.rich_text) || extractPlainText(gitProp.rich_text)
                : undefined;

            // Extract tags
            const tagsProp = props['Tag'];
            const tags = tagsProp?.type === 'multi_select'
                ? tagsProp.multi_select.map((t: { name: string }) => t.name)
                : [];

            // Extract languages
            const langProp = props['Languages'];
            const languages = langProp?.type === 'multi_select'
                ? langProp.multi_select.map((l: { name: string }) => l.name)
                : [];

            // Extract employer
            const employerProp = props['Employer'];
            const employer = employerProp?.type === 'rich_text'
                ? extractPlainText(employerProp.rich_text)
                : undefined;

            // Extract where
            const whereProp = props['Where'];
            const where = whereProp?.type === 'select'
                ? whereProp.select?.name
                : undefined;

            // Extract thumbnail
            const thumbProp = props['Thumbnail'];
            let thumbnail: string | undefined;
            if (thumbProp?.type === 'files' && thumbProp.files?.length > 0) {
                const file = thumbProp.files[0];
                if (file.type === 'file') {
                    thumbnail = file.file.url;
                } else if (file.type === 'external') {
                    thumbnail = file.external.url;
                }
            }

            // Get slug from property or generate from title
            const slugProp = props['slug'];
            const slug = slugProp?.type === 'rich_text' && slugProp.rich_text?.length > 0
                ? extractPlainText(slugProp.rich_text)
                : title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

            projects.push({
                id: page.id,
                slug,
                title,
                description,
                thumbnail,
                github,
                tags,
                languages,
                employer,
                where,
                url: page.url,
            });
        }

        return projects;
    } catch (error) {
        console.error('Error fetching portfolio projects from Notion:', error);
        return [];
    }
}

// Fetch CV data from Notion page
export async function getCVData(): Promise<NotionCVData | null> {
    if (!NOTION_API_KEY) {
        console.warn('NOTION_API_KEY not set, returning null CV data');
        return null;
    }

    try {
        const response = await notionFetch(`/blocks/${CV_PAGE_ID}/children?page_size=100`);

        let aboutMe = '';
        const education: NotionCVData['education'] = [];
        const experience: NotionCVData['experience'] = [];
        const skills: string[] = [];

        // Parse blocks to extract CV sections
        for (const block of response.results) {
            if (block.type === 'paragraph' && block.paragraph?.rich_text?.length > 0) {
                const text = extractPlainText(block.paragraph.rich_text);
                if (!aboutMe && text.length > 50) {
                    aboutMe = text;
                }
            }
        }

        return {
            aboutMe,
            education,
            experience,
            skills,
        };
    } catch (error) {
        console.error('Error fetching CV data from Notion:', error);
        return null;
    }
}

// Get all project slugs for static generation
export async function getAllProjectSlugs(): Promise<string[]> {
    const projects = await getProjects();
    return projects.map((p) => p.slug);
}

// Get single project by slug
export async function getProjectBySlug(slug: string): Promise<NotionPortfolioProject | null> {
    const projects = await getProjects();
    return projects.find((p) => p.slug === slug) || null;
}

// Block content types
export interface NotionBlock {
    id: string;
    type: string;
    content?: string;
    url?: string;  // For images, links
    caption?: string;
    children?: NotionBlock[];
    // For tables
    tableRows?: string[][];
    // For child_page and child_database
    title?: string;
    pageId?: string;
    // For links in rich text
    href?: string;
}

// Get page content (blocks) by page ID
export async function getPageContent(pageId: string): Promise<NotionBlock[]> {
    if (!NOTION_API_KEY) {
        console.warn('NOTION_API_KEY not set');
        return [];
    }

    // Helper to fetch children of a block
    async function fetchChildren(blockId: string): Promise<any[]> {
        try {
            const response = await notionFetch(`/blocks/${blockId}/children?page_size=100`);
            return response.results || [];
        } catch (e) {
            console.error(`Error fetching children for ${blockId}:`, e);
            return [];
        }
    }

    // Helper to fetch table rows
    async function fetchTableRows(tableBlockId: string): Promise<string[][]> {
        try {
            const response = await notionFetch(`/blocks/${tableBlockId}/children?page_size=100`);
            const rows: string[][] = [];
            for (const row of response.results) {
                if (row.type === 'table_row') {
                    const cells = row.table_row.cells.map((cell: any[]) =>
                        extractPlainText(cell)
                    );
                    rows.push(cells);
                }
            }
            return rows;
        } catch (e) {
            console.error('Error fetching table rows:', e);
            return [];
        }
    }

    // Helper function to process a single block recursively
    async function processBlock(block: any): Promise<NotionBlock | null> {
        const blockData: NotionBlock = {
            id: block.id,
            type: block.type,
        };

        switch (block.type) {
            case 'paragraph':
                blockData.content = extractPlainText(block.paragraph?.rich_text || []);
                break;
            case 'heading_1':
                blockData.content = extractPlainText(block.heading_1?.rich_text || []);
                break;
            case 'heading_2':
                blockData.content = extractPlainText(block.heading_2?.rich_text || []);
                break;
            case 'heading_3':
                blockData.content = extractPlainText(block.heading_3?.rich_text || []);
                break;
            case 'bulleted_list_item':
                blockData.content = extractPlainText(block.bulleted_list_item?.rich_text || []);
                break;
            case 'numbered_list_item':
                blockData.content = extractPlainText(block.numbered_list_item?.rich_text || []);
                break;
            case 'to_do':
                blockData.content = extractPlainText(block.to_do?.rich_text || []);
                break;
            case 'toggle':
                blockData.content = extractPlainText(block.toggle?.rich_text || []);
                break;
            case 'image':
                if (block.image?.type === 'file') {
                    blockData.url = block.image.file.url;
                } else if (block.image?.type === 'external') {
                    blockData.url = block.image.external.url;
                }
                blockData.caption = extractPlainText(block.image?.caption || []);
                break;
            case 'video':
                if (block.video?.type === 'file') {
                    blockData.url = block.video.file.url;
                } else if (block.video?.type === 'external') {
                    blockData.url = block.video.external.url;
                }
                break;
            case 'audio':
                if (block.audio?.type === 'file') {
                    blockData.url = block.audio.file.url;
                } else if (block.audio?.type === 'external') {
                    blockData.url = block.audio.external.url;
                }
                blockData.caption = extractPlainText(block.audio?.caption || []);
                break;
            case 'file':
                if (block.file?.type === 'file') {
                    blockData.url = block.file.file.url;
                    blockData.content = block.file.name || 'Download file';
                } else if (block.file?.type === 'external') {
                    blockData.url = block.file.external.url;
                    blockData.content = block.file.name || 'Download file';
                }
                blockData.caption = extractPlainText(block.file?.caption || []);
                break;
            case 'pdf':
                if (block.pdf?.type === 'file') {
                    blockData.url = block.pdf.file.url;
                } else if (block.pdf?.type === 'external') {
                    blockData.url = block.pdf.external.url;
                }
                blockData.caption = extractPlainText(block.pdf?.caption || []);
                break;
            case 'embed':
                blockData.url = block.embed?.url;
                blockData.caption = extractPlainText(block.embed?.caption || []);
                break;
            case 'bookmark':
                blockData.url = block.bookmark?.url;
                blockData.caption = extractPlainText(block.bookmark?.caption || []);
                break;
            case 'link_preview':
                blockData.url = block.link_preview?.url;
                break;
            case 'table':
                // Fetch table rows
                blockData.tableRows = await fetchTableRows(block.id);
                break;
            case 'child_page':
                blockData.title = block.child_page?.title || 'Untitled';
                blockData.pageId = block.id;
                break;
            case 'child_database':
                blockData.title = block.child_database?.title || 'Database';
                blockData.pageId = block.id;
                break;
            case 'column_list':
            case 'column':
                // Children will be fetched below
                break;
            case 'divider':
                // Just mark as divider
                break;
            case 'quote':
                blockData.content = extractPlainText(block.quote?.rich_text || []);
                break;
            case 'callout':
                blockData.content = extractPlainText(block.callout?.rich_text || []);
                break;
            case 'code':
                blockData.content = extractPlainText(block.code?.rich_text || []);
                blockData.caption = block.code?.language || '';
                break;
            default:
                // Skip unsupported block types
                return null;
        }

        // Recursively fetch children for ANY block that has_children = true (PARALLEL)
        if (block.has_children && block.type !== 'table') {
            const childBlocks = await fetchChildren(block.id);
            // Process all children in parallel
            const processedChildren = await Promise.all(
                childBlocks.map(child => processBlock(child))
            );
            const children = processedChildren.filter((c): c is NotionBlock => c !== null);
            if (children.length > 0) {
                blockData.children = children;
            }
        }

        // Return block if it has content, url, children, tableRows, title, or is a divider
        if (blockData.content || blockData.url || blockData.children?.length ||
            blockData.tableRows?.length || blockData.title || block.type === 'divider') {
            return blockData;
        }
        return null;
    }

    try {
        const response = await notionFetch(`/blocks/${pageId}/children?page_size=100`);
        // Process all top-level blocks in parallel
        const processedBlocks = await Promise.all(
            response.results.map((block: any) => processBlock(block))
        );
        const blocks = processedBlocks.filter((b): b is NotionBlock => b !== null);

        return blocks;
    } catch (error) {
        console.error('Error fetching page content:', error);
        return [];
    }
}
