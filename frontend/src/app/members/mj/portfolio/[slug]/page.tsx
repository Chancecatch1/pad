/* CHANGE NOTE
Why: Added proper spacing between all sections
What changed: Increased spacing between all elements for better readability
Behaviour/Assumptions: Clear visual separation between sections
Rollback: Revert to previous version
— mj
*/

"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getPortfolioProjectBySlug } from '@/data/portfolio';

export default function PortfolioProjectPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = getPortfolioProjectBySlug(slug);

    if (!project) {
        return (
            <div style={{ padding: '27px 0' }}>
                <p>Project Not Found</p>
                <Link href="/members/mj" className="hover:opacity-60" style={{ marginTop: '16px', display: 'inline-block' }}>
                    ← Back to Portfolio
                </Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '27px 0' }}>
            {/* Back Link */}
            <Link href="/members/mj" className="hover:opacity-60" style={{ color: '#666', marginBottom: '32px', display: 'inline-block' }}>
                ← Back to Portfolio
            </Link>

            {/* Header */}
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>{project.title}</h1>
                <p style={{ color: '#666', marginBottom: '12px' }}>{project.date}</p>
                <p style={{ color: '#444', lineHeight: '1.7' }}>{project.description}</p>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
                {project.links.github && (
                    <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-60"
                    >
                        GitHub →
                    </a>
                )}
                {project.links.live && (
                    <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-60"
                    >
                        Live Demo →
                    </a>
                )}
            </div>

            {/* Tech Stack */}
            <section style={{ marginBottom: '32px' }}>
                <h2 style={{ fontWeight: 700, marginBottom: '12px' }}>Tech Stack</h2>
                <p style={{ color: '#444', lineHeight: '1.6' }}>{project.techStack.join(' · ')}</p>
            </section>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
                <section style={{ marginBottom: '32px' }}>
                    <h2 style={{ fontWeight: 700, marginBottom: '12px' }}>Key Highlights</h2>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {project.highlights.map((highlight, i) => (
                            <li key={i} style={{ color: '#444', lineHeight: '1.6' }}>• {highlight}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Long Description */}
            <section style={{ marginBottom: '32px' }}>
                <h2 style={{ fontWeight: 700, marginBottom: '12px' }}>About This Project</h2>
                <p style={{ color: '#444', lineHeight: '1.7', whiteSpace: 'pre-line' }}>{project.longDescription}</p>
            </section>

            {/* Languages */}
            <section>
                <h2 style={{ fontWeight: 700, marginBottom: '12px' }}>Languages</h2>
                <p style={{ color: '#444', lineHeight: '1.6' }}>{project.languages.join(' · ')}</p>
            </section>
        </div>
    );
}
