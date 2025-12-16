/* CHANGE NOTE
Why: Fetch README content from GitHub for auto-updating portfolio
What changed: Created API route to fetch README from any repo
Behaviour/Assumptions: Fetches README.md and returns markdown content
Rollback: Delete this file
— mj
*/

import { NextRequest, NextResponse } from 'next/server';

const GITHUB_USERNAME = 'chancecatch1';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ repo: string }> }
) {
    const { repo } = await params;

    try {
        const headers: HeadersInit = {
            'Accept': 'application/vnd.github.v3.raw',
            'User-Agent': 'PAD-Portfolio',
        };

        if (process.env.GITHUB_TOKEN) {
            headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
        }

        const response = await fetch(
            `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/readme`,
            {
                headers,
                next: { revalidate: 300 }, // Cache for 5 minutes
            }
        );

        if (!response.ok) {
            if (response.status === 404) {
                return NextResponse.json(
                    { error: 'README not found' },
                    { status: 404 }
                );
            }
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const content = await response.text();

        // Convert relative image URLs to GitHub raw URLs
        const processedContent = content.replace(
            /!\[([^\]]*)\]\((?!http)([^)]+)\)/g,
            `![$1](https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo}/main/$2)`
        );

        return NextResponse.json({
            content: processedContent,
            repo: repo,
        });
    } catch (error) {
        console.error('GitHub README API error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch README' },
            { status: 500 }
        );
    }
}
