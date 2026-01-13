/* CHANGE NOTE
Why: Implement ISR for faster page loading with cached Notion content
What changed: Converted from client component to server component with revalidate=300
Behaviour/Assumptions: Page is statically generated and revalidated every 5 minutes
Rollback: Restore previous client-side version
— mj
*/

import Link from 'next/link';
import { getProjects, getPageContent } from '@/lib/notion';
import { notFound } from 'next/navigation';
import ProjectsContent from './ProjectsContent';

// ISR: Revalidate every 5 minutes (300 seconds)
export const revalidate = 300;

// Generate static params for all projects
export async function generateStaticParams() {
    const projects = await getProjects();
    return projects.map((project) => ({
        id: project.id,
    }));
}

interface NotionBlock {
    id: string;
    type: string;
    content?: string;
    url?: string;
    caption?: string;
    children?: NotionBlock[];
    tableRows?: string[][];
    title?: string;
    pageId?: string;
    href?: string;
}

interface NotionProject {
    id: string;
    slug: string;
    title: string;
    description: string;
    thumbnail?: string;
    github?: string;
    tags: string[];
    url: string;
}

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { id } = await params;

    // Fetch data on server
    const projects = await getProjects();
    const project = projects.find((p) => p.id === id || p.slug === id);

    if (!project) {
        notFound();
    }

    const content = await getPageContent(project.id);

    return (
        <div style={{ padding: '27px 0', maxWidth: '800px' }}>
            {/* Back link */}
            <Link href="/members/mj" className="hover:opacity-60" style={{ color: '#666', marginBottom: '24px', display: 'inline-block' }}>
                ← Back to projects
            </Link>

            {/* Project Header */}
            <section style={{ marginBottom: '32px', marginTop: '16px' }}>
                <h1 style={{ fontWeight: 700, fontSize: '24px', marginBottom: '8px' }}>{project.title}</h1>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>{project.description}</p>

                {/* Tags */}
                {project.tags.length > 0 && (
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                        {project.tags.map((tag, i) => (
                            <span key={i} style={{
                                background: '#e0e0e0',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '12px'
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Links */}
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-60"
                        style={{ color: '#000', textDecoration: 'underline' }}
                    >
                        View on GitHub →
                    </a>
                )}
            </section>

            {/* Thumbnail */}
            {project.thumbnail && (
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    style={{ width: '100px', height: 'auto', borderRadius: '4px', marginBottom: '32px' }}
                />
            )}

            {/* Notion Content - Client Component for interactivity */}
            <ProjectsContent content={content} />
        </div>
    );
}
