/* CHANGE NOTE
Why: Fetch portfolio from Notion API for dynamic updates
What changed: Now fetches from /api/projects, displays Notion thumbnails
Behaviour/Assumptions: Projects with show=true in Notion DB are displayed
Rollback: Revert to use static portfolio.ts
— mj
*/

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

export default function MJPage() {
    const [projects, setProjects] = useState<NotionProject[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching portfolio:', err);
                setLoading(false);
            });
    }, []);

    return (
        <div style={{ padding: '27px 0' }}>
            {/* Profile Header */}
            <section style={{ marginBottom: '50px' }}>
                <h1 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>Mj</h1>
                <p style={{ color: '#666', lineHeight: '1.6' }}>HCI Research Assistant</p>
            </section>

            {/* Works - Image Grid */}
            <section>
                {loading ? (
                    <div style={{ color: '#666' }}>Loading...</div>
                ) : (
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, 200px)',
                            gap: '25px'
                        }}
                    >
                        {projects.map((project) => (
                            <Link
                                key={project.id}
                                href={`/members/mj/projects/${project.id}`}
                                className="block hover:opacity-60"
                                style={{ width: '200px' }}
                            >
                                {/* Image container */}
                                <div style={{ width: '200px', height: '150px', background: '#e0e0e0', overflow: 'hidden' }}>
                                    {project.thumbnail ? (
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                        />
                                    ) : (
                                        <div style={{
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#000',
                                            fontSize: '13px',
                                            lineHeight: '16.9px',
                                            textAlign: 'center',
                                            padding: '8px'
                                        }}>
                                            {project.title}
                                        </div>
                                    )}
                                </div>
                                {/* Title below image */}
                                {project.thumbnail && (
                                    <div style={{
                                        fontSize: '13px',
                                        lineHeight: '16.9px',
                                        color: '#000',
                                        textAlign: 'center',
                                        marginTop: '4px'
                                    }}>
                                        {project.title}
                                    </div>
                                )}
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
