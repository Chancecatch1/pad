/* CHANGE NOTE
Why: Fetch GitHub repositories for MJ's portfolio
What changed: Created API route to fetch repos from GitHub API
Behaviour/Assumptions: Uses GITHUB_TOKEN from env for auth, caches for 5 minutes
Rollback: Delete this file
— mj
*/

import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'chancecatch1';
const CACHE_DURATION = 300; // 5 minutes in seconds

export async function GET() {
    try {
        const headers: HeadersInit = {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'PAD-Portfolio',
        };

        // Add auth token if available (for private repos and higher rate limits)
        if (process.env.GITHUB_TOKEN) {
            headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
        }

        const response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
            {
                headers,
                next: { revalidate: CACHE_DURATION },
            }
        );

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const repos = await response.json();

        // Filter out forks and map to our format
        const filteredRepos = repos
            .filter((repo: { fork: boolean }) => !repo.fork)
            .map((repo: {
                id: number;
                name: string;
                full_name: string;
                description: string | null;
                html_url: string;
                homepage: string | null;
                language: string | null;
                topics: string[];
                stargazers_count: number;
                updated_at: string;
                pushed_at: string;
                private: boolean;
            }) => ({
                id: repo.id,
                name: repo.name,
                full_name: repo.full_name,
                description: repo.description,
                html_url: repo.html_url,
                homepage: repo.homepage,
                language: repo.language,
                topics: repo.topics || [],
                stargazers_count: repo.stargazers_count,
                updated_at: repo.updated_at,
                pushed_at: repo.pushed_at,
                isPrivate: repo.private,
            }));

        return NextResponse.json(filteredRepos, {
            headers: {
                'Cache-Control': `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate`,
            },
        });
    } catch (error) {
        console.error('GitHub API error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch GitHub repositories' },
            { status: 500 }
        );
    }
}
