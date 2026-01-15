/* CHANGE NOTE
Why: Notion file URLs expire after 1 hour; this API fetches fresh URLs on demand
What changed: Created API route to proxy Notion media (images, videos, audio, files)
Behaviour/Assumptions: Requires NOTION_API_KEY, returns redirect to fresh URL
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
    const blockId = searchParams.get('blockId');

    if (!blockId) {
        return NextResponse.json({ error: 'blockId is required' }, { status: 400 });
    }

    if (!NOTION_API_KEY) {
        return NextResponse.json({ error: 'Notion API key not configured' }, { status: 500 });
    }

    // Check cache first
    const cached = urlCache.get(blockId);
    if (cached && cached.expires > Date.now()) {
        return NextResponse.redirect(cached.url);
    }

    try {
        // Fetch the block from Notion to get fresh URL
        const response = await fetch(`${NOTION_API_BASE}/blocks/${blockId}`, {
            headers: {
                'Authorization': `Bearer ${NOTION_API_KEY}`,
                'Notion-Version': '2022-06-28',
            },
        });

        if (!response.ok) {
            console.error(`Notion API error: ${response.status}`);
            return NextResponse.json({ error: 'Failed to fetch from Notion' }, { status: 502 });
        }

        const block = await response.json();
        let mediaUrl: string | null = null;

        // Extract URL based on block type
        switch (block.type) {
            case 'image':
                mediaUrl = block.image?.type === 'file'
                    ? block.image.file.url
                    : block.image?.external?.url;
                break;
            case 'video':
                mediaUrl = block.video?.type === 'file'
                    ? block.video.file.url
                    : block.video?.external?.url;
                break;
            case 'audio':
                mediaUrl = block.audio?.type === 'file'
                    ? block.audio.file.url
                    : block.audio?.external?.url;
                break;
            case 'file':
                mediaUrl = block.file?.type === 'file'
                    ? block.file.file.url
                    : block.file?.external?.url;
                break;
            case 'pdf':
                mediaUrl = block.pdf?.type === 'file'
                    ? block.pdf.file.url
                    : block.pdf?.external?.url;
                break;
            default:
                return NextResponse.json({ error: `Unsupported block type: ${block.type}` }, { status: 400 });
        }

        if (!mediaUrl) {
            return NextResponse.json({ error: 'No media URL found in block' }, { status: 404 });
        }

        // Cache the fresh URL
        urlCache.set(blockId, {
            url: mediaUrl,
            expires: Date.now() + CACHE_DURATION,
        });

        // Redirect to the fresh URL
        return NextResponse.redirect(mediaUrl);

    } catch (error) {
        console.error('Error fetching Notion media:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
