/* CHANGE NOTE
Why: Display full Notion page content for portfolio projects
What changed: Created detail page that fetches and renders Notion blocks
Behaviour/Assumptions: Uses project ID from URL to fetch content
Rollback: Delete this file
— mj
*/

"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface NotionBlock {
    id: string;
    type: string;
    content?: string;
    url?: string;
    caption?: string;
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

// Helper to get media URL - uses proxy API if blockId is available (for fresh URLs)
function getMediaUrl(block: NotionBlock): string {
    if (block.id && block.url?.includes('prod-files-secure.s3')) {
        return `/api/notion-media?blockId=${block.id}`;
    }
    return block.url || '';
}

export default function PortfolioDetailPage() {
    const params = useParams();
    const id = params.id as string;

    const [project, setProject] = useState<NotionProject | null>(null);
    const [content, setContent] = useState<NotionBlock[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch project info
        fetch('/api/portfolio')
            .then(res => res.json())
            .then(projects => {
                const found = projects.find((p: NotionProject) => p.id === id || p.slug === id);
                if (found) {
                    setProject(found);
                    // Fetch page content
                    return fetch(`/api/portfolio/content?pageId=${found.id}`);
                }
                throw new Error('Project not found');
            })
            .then(res => res?.json())
            .then(data => {
                if (data) setContent(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching project:', err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div style={{ padding: '27px 0' }}>
                <div style={{ color: '#666' }}>Loading...</div>
            </div>
        );
    }

    if (!project) {
        return (
            <div style={{ padding: '27px 0' }}>
                <h1 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>Project not found</h1>
                <Link href="/members/mj" className="hover:opacity-60" style={{ color: '#666' }}>
                    ← Back to portfolio
                </Link>
            </div>
        );
    }

    // Render a single Notion block
    const renderBlock = (block: NotionBlock) => {
        switch (block.type) {
            case 'paragraph':
                return block.content ? (
                    <p key={block.id} style={{ marginBottom: '16px', lineHeight: '1.8' }}>
                        {block.content}
                    </p>
                ) : null;
            case 'heading_1':
                return (
                    <h1 key={block.id} style={{ fontWeight: 700, fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>
                        {block.content}
                    </h1>
                );
            case 'heading_2':
                return (
                    <h2 key={block.id} style={{ fontWeight: 700, fontSize: '20px', marginTop: '24px', marginBottom: '12px' }}>
                        {block.content}
                    </h2>
                );
            case 'heading_3':
                return (
                    <h3 key={block.id} style={{ fontWeight: 700, fontSize: '16px', marginTop: '20px', marginBottom: '8px' }}>
                        {block.content}
                    </h3>
                );
            case 'bulleted_list_item':
                return (
                    <li key={block.id} style={{ marginLeft: '20px', marginBottom: '8px', lineHeight: '1.6' }}>
                        {block.content}
                    </li>
                );
            case 'numbered_list_item':
                return (
                    <li key={block.id} style={{ marginLeft: '20px', marginBottom: '8px', lineHeight: '1.6', listStyleType: 'decimal' }}>
                        {block.content}
                    </li>
                );
            case 'image':
                return (
                    <figure key={block.id} style={{ marginTop: '24px', marginBottom: '24px' }}>
                        <img
                            src={getMediaUrl(block)}
                            alt={block.caption || 'Project image'}
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }}
                        />
                        {block.caption && (
                            <figcaption style={{ fontSize: '12px', color: '#666', marginTop: '8px', textAlign: 'center' }}>
                                {block.caption}
                            </figcaption>
                        )}
                    </figure>
                );
            case 'video':
                return (
                    <div key={block.id} style={{ marginTop: '24px', marginBottom: '24px' }}>
                        <video
                            src={getMediaUrl(block)}
                            controls
                            style={{ maxWidth: '100%', borderRadius: '4px' }}
                        />
                    </div>
                );
            case 'divider':
                return (
                    <hr key={block.id} style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />
                );
            case 'quote':
                return (
                    <blockquote key={block.id} style={{
                        borderLeft: '3px solid #000',
                        paddingLeft: '16px',
                        margin: '16px 0',
                        fontStyle: 'italic',
                        color: '#444'
                    }}>
                        {block.content}
                    </blockquote>
                );
            case 'callout':
                return (
                    <div key={block.id} style={{
                        background: '#f5f5f5',
                        padding: '16px',
                        borderRadius: '4px',
                        margin: '16px 0'
                    }}>
                        {block.content}
                    </div>
                );
            case 'code':
                return (
                    <pre key={block.id} style={{
                        background: '#f5f5f5',
                        padding: '16px',
                        borderRadius: '4px',
                        overflow: 'auto',
                        fontSize: '14px',
                        margin: '16px 0'
                    }}>
                        <code>{block.content}</code>
                    </pre>
                );
            default:
                return null;
        }
    };

    return (
        <div style={{ padding: '27px 0', maxWidth: '800px' }}>
            {/* Back link */}
            <Link href="/members/mj" className="hover:opacity-60" style={{ color: '#666', marginBottom: '24px', display: 'inline-block' }}>
                ← Back to portfolio
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
            </section>

            {/* Notion Content */}
            <article>
                {content.map(block => renderBlock(block))}
            </article>
        </div>
    );
}
