/* CHANGE NOTE
Why: Shared Notion content renderer for both MJ and PAD project pages
What changed: Moved from MJ-specific ProjectsContent to shared component
Behaviour/Assumptions: Renders all Notion block types consistently
Rollback: Delete this file and restore original components
— mj
*/

"use client";

import { NotionBlock } from '@/lib/notion';
import styles from './NotionContent.module.css';

interface Props {
    content: NotionBlock[];
}

// Helper to get media URL - uses proxy API if blockId is available (for fresh URLs)
function getMediaUrl(block: NotionBlock): string {
    // Use proxy API for Notion-hosted files (they have signed URLs that expire)
    // External URLs don't need proxying
    if (block.id && block.url?.includes('prod-files-secure.s3')) {
        return `/api/notion-media?blockId=${block.id}`;
    }
    return block.url || '';
}

export default function NotionContent({ content }: Props) {
    // Render a single Notion block
    const renderBlock = (block: NotionBlock): React.ReactNode => {
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
            case 'audio':
                return (
                    <div key={block.id} style={{ marginTop: '16px', marginBottom: '16px' }}>
                        <audio
                            src={getMediaUrl(block)}
                            controls
                            style={{ width: '100%' }}
                        />
                        {block.caption && (
                            <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                                {block.caption}
                            </p>
                        )}
                    </div>
                );
            case 'file':
                return (
                    <div key={block.id} style={{ marginTop: '12px', marginBottom: '12px' }}>
                        <a
                            href={getMediaUrl(block)}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 12px',
                                background: '#f5f5f5',
                                borderRadius: '4px',
                                color: '#333',
                                textDecoration: 'none'
                            }}
                        >
                            📎 {block.content || 'Download file'}
                        </a>
                    </div>
                );
            case 'embed':
                return (
                    <div key={block.id} style={{ marginTop: '24px', marginBottom: '24px' }}>
                        <iframe
                            src={block.url}
                            style={{ width: '100%', minHeight: '400px', border: 'none', borderRadius: '4px' }}
                            allowFullScreen
                        />
                        {block.caption && (
                            <p style={{ fontSize: '12px', color: '#666', marginTop: '8px', textAlign: 'center' }}>
                                {block.caption}
                            </p>
                        )}
                    </div>
                );
            case 'column_list':
                return (
                    <div key={block.id} style={{
                        display: 'flex',
                        gap: '16px',
                        marginTop: '16px',
                        marginBottom: '16px'
                    }}>
                        {block.children?.map(renderBlock)}
                    </div>
                );
            case 'column':
                return (
                    <div key={block.id} style={{ flex: 1, minWidth: 0 }}>
                        {block.children?.map(renderBlock)}
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
                        {block.caption && (
                            <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
                                {block.caption}
                            </div>
                        )}
                        <code>{block.content}</code>
                    </pre>
                );
            case 'toggle':
                return (
                    <details key={block.id} style={{ marginBottom: '8px' }}>
                        <summary style={{ cursor: 'pointer', fontWeight: 500 }}>
                            {block.content}
                        </summary>
                        <div style={{ paddingLeft: '16px', marginTop: '8px' }}>
                            {block.children?.map(renderBlock)}
                        </div>
                    </details>
                );
            case 'to_do':
                return (
                    <div key={block.id} style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <input type="checkbox" disabled style={{ marginTop: '4px' }} />
                        <span>{block.content}</span>
                    </div>
                );
            case 'table':
                return (
                    <div key={block.id} style={{ margin: '16px 0', overflowX: 'auto' }}>
                        <table style={{
                            borderCollapse: 'collapse',
                            fontSize: '11px'
                        }}>
                            <tbody>
                                {block.tableRows?.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex} style={{
                                                border: '1px solid #e0e0e0',
                                                padding: '4px 8px',
                                                background: rowIndex === 0 ? '#f5f5f5' : 'transparent',
                                                whiteSpace: 'nowrap'
                                            }}>
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case 'child_page':
                return (
                    <a
                        key={block.id}
                        href={`https://notion.so/${block.pageId?.replace(/-/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '6px 10px',
                            background: '#f9f9f9',
                            borderRadius: '3px',
                            margin: '4px 0',
                            color: '#333',
                            textDecoration: 'none',
                            border: '1px solid #e0e0e0',
                            fontSize: '13px'
                        }}
                        className="hover:opacity-60"
                    >
                        📄 {block.title}
                    </a>
                );
            case 'child_database':
                return (
                    <a
                        key={block.id}
                        href={`https://notion.so/${block.pageId?.replace(/-/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '6px 10px',
                            background: '#f0f7ff',
                            borderRadius: '3px',
                            margin: '4px 0',
                            color: '#333',
                            textDecoration: 'none',
                            border: '1px solid #d0e3ff',
                            fontSize: '13px'
                        }}
                        className="hover:opacity-60"
                    >
                        🗃️ {block.title}
                    </a>
                );
            case 'bookmark':
            case 'link_preview':
                return (
                    <a
                        key={block.id}
                        href={block.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '6px 10px',
                            background: '#f5f5f5',
                            borderRadius: '3px',
                            margin: '4px 0',
                            color: '#333',
                            textDecoration: 'none',
                            border: '1px solid #e0e0e0',
                            fontSize: '12px',
                            maxWidth: '100%',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        }}
                        className="hover:opacity-60"
                    >
                        🔗 {block.caption || (block.url && block.url.length > 50 ? block.url.substring(0, 50) + '...' : block.url)}
                    </a>
                );
            case 'pdf':
                return (
                    <div key={block.id} style={{ margin: '16px 0' }}>
                        <iframe
                            src={getMediaUrl(block)}
                            style={{ width: '100%', height: '600px', border: '1px solid #e0e0e0', borderRadius: '4px' }}
                        />
                        {block.caption && (
                            <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
                                {block.caption}
                            </p>
                        )}
                    </div>
                );
            case 'bulleted_list_item':
                return (
                    <li key={block.id} style={{
                        marginLeft: '20px',
                        marginBottom: '8px',
                        lineHeight: '1.6',
                        listStyleType: 'disc'
                    }}>
                        {block.content}
                        {block.children && block.children.length > 0 && (
                            <ul style={{ marginTop: '8px', paddingLeft: '0' }}>
                                {block.children.map(renderBlock)}
                            </ul>
                        )}
                    </li>
                );
            case 'numbered_list_item':
                return (
                    <li key={block.id} style={{
                        marginLeft: '20px',
                        marginBottom: '8px',
                        lineHeight: '1.6',
                        listStyleType: 'decimal'
                    }}>
                        {block.content}
                        {block.children && block.children.length > 0 && (
                            <ul style={{ marginTop: '8px', paddingLeft: '0' }}>
                                {block.children.map(renderBlock)}
                            </ul>
                        )}
                    </li>
                );
            default:
                return null;
        }
    };

    return (
        <article className={styles.contentContainer}>
            {content.map(block => renderBlock(block))}
        </article>
    );
}
