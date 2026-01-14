/* CHANGE NOTE
Why: API route to fetch MJ portfolio from Notion
What changed: Created endpoint that returns Notion projects with show=true
Behaviour/Assumptions: Caches for 60 seconds to avoid excessive API calls
Rollback: Delete this file
— mj
*/

import { NextResponse } from 'next/server';
import { getProjects } from '@/lib/notion';

export async function GET() {
    try {
        const projects = await getProjects();

        return NextResponse.json(projects, {
            headers: {
                'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
            },
        });
    } catch (error) {
        console.error('Error fetching portfolio:', error);
        return NextResponse.json(
            { error: 'Failed to fetch portfolio' },
            { status: 500 }
        );
    }
}
