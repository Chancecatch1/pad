/* CHANGE NOTE
Why: Notion thumbnail URLs expire after 1 hour; this API fetches fresh URLs on demand
What changed: Created API route to proxy Notion page thumbnails using page ID
Behaviour/Assumptions: Requires NOTION_API_KEY, returns redirect to fresh thumbnail URL
Rollback: Delete this file
— mj
*/

import { NextRequest, NextResponse } from 'next/server';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_API_BASE = 'https://api.notion.com/v1';

// Cache for fresh URLs (5 minutes to avoid hammering Notion API)
const urlCache = new Map<string, { url: string; expires: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const pageId = searchParams.get('pageId');

    if (!pageId) {
        return NextResponse.json({ error: 'pageId is required' }, { status: 400 });
    }

    if (!NOTION_API_KEY) {
        return NextResponse.json({ error: 'Notion API key not configured' }, { status: 500 });
    }

    // Check cache first
    const cached = urlCache.get(pageId);
    if (cached && cached.expires > Date.now()) {
        return NextResponse.redirect(cached.url);
    }

    try {
        // Fetch the page from Notion to get fresh thumbnail URL
        const response = await fetch(`${NOTION_API_BASE}/pages/${pageId}`, {
            headers: {
                'Authorization': `Bearer ${NOTION_API_KEY}`,
                'Notion-Version': '2022-06-28',
            },
        });

        if (!response.ok) {
            console.error(`Notion API error: ${response.status}`);
            return NextResponse.json({ error: 'Failed to fetch from Notion' }, { status: 502 });
        }

        const page = await response.json();
        let thumbnailUrl: string | null = null;

        // Extract thumbnail from page properties
        const props = page.properties;
        const thumbProp = props?.['Thumbnail'];

        if (thumbProp?.type === 'files' && thumbProp.files?.length > 0) {
            const file = thumbProp.files[0];
            if (file.type === 'file') {
                thumbnailUrl = file.file.url;
            } else if (file.type === 'external') {
                thumbnailUrl = file.external.url;
            }
        }

        if (!thumbnailUrl) {
            return NextResponse.json({ error: 'No thumbnail found for page' }, { status: 404 });
        }

        // Cache the fresh URL
        urlCache.set(pageId, {
            url: thumbnailUrl,
            expires: Date.now() + CACHE_DURATION,
        });

        // Redirect to the fresh URL
        return NextResponse.redirect(thumbnailUrl);

    } catch (error) {
        console.error('Error fetching Notion thumbnail:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
