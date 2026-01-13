/* CHANGE NOTE
Why: Simplified Like a Dream project - only link, no text
What changed: Removed all description and content, just shows link
Behaviour/Assumptions: Clean minimal display with just the exhibition link
Rollback: Revert to previous version
— mj
*/

"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getProjectBySlug } from '@/data/projects';

export default function ProjectDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = getProjectBySlug(slug);

    if (!project) {
        return (
            <div className="py-8">
                <h1 className="font-bold">Project Not Found</h1>
            </div>
        );
    }

    return (
        <div style={{ padding: '27px 0' }}>
            <section style={{ marginBottom: '50px' }}>
                <h1 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>{project.title}</h1>
            </section>

            {/* Links only - no description text */}
            <div style={{ display: 'flex', gap: '16px' }}>
                {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">
                        View Exhibition →
                    </a>
                )}
                {project.links.demo && (
                    <Link href={project.links.demo} className="hover:opacity-60">
                        Try Demo →
                    </Link>
                )}
                {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">
                        GitHub
                    </a>
                )}
            </div>
        </div>
    );
}
