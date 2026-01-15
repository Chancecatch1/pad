/* CHANGE NOTE
Why: PAD Project detail page - unified with MJ project page structure
What changed: Using shared NotionContent component, added back link, tags, ISR
Behaviour/Assumptions: Consistent UI between MJ and PAD project pages
Rollback: Restore previous version
— mj
*/

import Link from 'next/link';
import { getPADProjectBySlug, getPADProjects, getPageContent } from '@/lib/notion';
import { notFound } from 'next/navigation';
import NotionContent from '@/components/NotionContent';
import styles from '@/components/NotionContent.module.css';

// ISR: Revalidate every 5 minutes (300 seconds)
export const revalidate = 300;

// Generate static paths for all projects
export async function generateStaticParams() {
    const projects = await getPADProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Server component
export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const project = await getPADProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    // Fetch page content from Notion
    const content = await getPageContent(project.id);

    return (
        <div style={{ padding: '27px 0', maxWidth: '800px' }}>
            {/* Back link */}
            <Link href="/projects" className="hover:opacity-60" style={{ color: '#666', marginBottom: '24px', display: 'inline-block' }}>
                ← Back to projects
            </Link>

            {/* Project Header */}
            <section style={{ marginBottom: '32px', marginTop: '16px' }}>
                <h1 style={{ fontWeight: 700, fontSize: '24px', marginBottom: '8px' }}>{project.title}</h1>
                {project.description && (
                    <p className={styles.contentContainer} style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>{project.description}</p>
                )}

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
                <div style={{ display: 'flex', gap: '16px' }}>
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
                </div>
            </section>

            {/* Notion Content - Client Component for interactivity */}
            <NotionContent content={content} />
        </div>
    );
}
