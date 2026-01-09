/* CHANGE NOTE
Why: Added proper spacing between intro and images, better layout
What changed: Increased spacing, added line height for better readability
Behaviour/Assumptions: Clear visual separation between sections
Rollback: Revert to previous version
— mj
*/

"use client";

import Link from 'next/link';
import Image from 'next/image';
import { getMemberProjects } from '@/data/projects';
import { portfolioProjects } from '@/data/portfolio';

export default function MJPage() {
    const memberProjects = getMemberProjects('mj');

    // Combine team projects and portfolio, sort by date (newest first)
    const allWorks = [
        ...memberProjects.map(p => ({
            slug: p.slug,
            title: p.title,
            thumbnail: p.thumbnail,
            href: p.isTeamProject ? `/projects/${p.slug}` : (p.links.demo || `/projects/${p.slug}`),
            date: p.date || '2020',
        })),
        ...portfolioProjects.map(p => ({
            slug: p.slug,
            title: p.title,
            thumbnail: p.thumbnail,
            href: `/members/mj/portfolio/${p.slug}`,
            date: p.date || '2020',
        })),
    ].sort((a, b) => {
        const dateA = a.date.replace(/\./g, '');
        const dateB = b.date.replace(/\./g, '');
        return dateB.localeCompare(dateA);
    });

    return (
        <div style={{ padding: '27px 0' }}>
            {/* Profile Header */}
            <section style={{ marginBottom: '50px' }}>
                <h1 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>Mj</h1>
                <p style={{ color: '#666', marginBottom: '16px', lineHeight: '1.6' }}>HCI Research Assistant</p>
                <p style={{ color: '#444', lineHeight: '1.7' }}>
                    Hey there! I&apos;m a machine learning engineer, currently pursuing my MSc at the University of Calgary,
                    focusing on AI-assisted AR for healthcare. Before this, I worked as a project manager in the arts field.
                </p>
            </section>

            {/* Works - Image Grid */}
            <section>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, 200px)',
                        gap: '25px'
                    }}
                >
                    {allWorks.map((work) => (
                        <Link
                            key={work.slug}
                            href={work.href}
                            className="block hover:opacity-60"
                            style={{ width: '200px' }}
                            title={work.title}
                        >
                            <div style={{ width: '200px', height: '150px', background: '#e0e0e0', overflow: 'hidden' }}>
                                {work.thumbnail ? (
                                    <Image
                                        src={work.thumbnail}
                                        alt={work.title}
                                        width={200}
                                        height={150}
                                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                    />
                                ) : (
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#666',
                                        fontSize: '24px'
                                    }}>
                                        {work.title.charAt(0)}
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
