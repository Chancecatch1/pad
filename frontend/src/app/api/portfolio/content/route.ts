/* CHANGE NOTE
Why: API route to fetch Notion page content (blocks)
What changed: Created endpoint that returns full page content with images
Behaviour/Assumptions: Page ID passed as query param
Rollback: Delete this file
— mj
*/

import { NextRequest, NextResponse } from 'next/server';
import { getPageContent } from '@/lib/notion';

export async function GET(request: NextRequest) {
    const pageId = request.nextUrl.searchParams.get('pageId');

    if (!pageId) {
        return NextResponse.json(
            { error: 'pageId is required' },
            { status: 400 }
        );
    }

    try {
        const content = await getPageContent(pageId);

        return NextResponse.json(content, {
            headers: {
                'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
            },
        });
    } catch (error) {
        console.error('Error fetching page content:', error);
        return NextResponse.json(
            { error: 'Failed to fetch page content' },
            { status: 500 }
        );
    }
}
