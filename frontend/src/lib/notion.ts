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
export async function getPortfolioProjects(): Promise<NotionPortfolioProject[]> {
    if (!NOTION_API_KEY) {
        console.warn('NOTION_API_KEY not set, returning empty projects');
        return [];
    }

    try {
        const response = await notionFetch(`/databases/${PORTFOLIO_DB_ID}/query`, {
            method: 'POST',
            body: JSON.stringify({
                sorts: [{ property: 'Name', direction: 'ascending' }],
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
            const tagsProp = props['Tags'];
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

            // Create slug from title
            const slug = title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');

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
    const projects = await getPortfolioProjects();
    return projects.map((p) => p.slug);
}

// Get single project by slug
export async function getProjectBySlug(slug: string): Promise<NotionPortfolioProject | null> {
    const projects = await getPortfolioProjects();
    return projects.find((p) => p.slug === slug) || null;
}
