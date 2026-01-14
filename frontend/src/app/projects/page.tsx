/* CHANGE NOTE
Why: PAD Projects page using Notion DB as data source
What changed: Converted to server component, fetching from Notion API
Behaviour/Assumptions: Falls back to static data if Notion fails
Rollback: Restore previous client component version
— mj
*/

import { getPADProjects, NotionPADProject } from '@/lib/notion';
import Link from 'next/link';
import Image from 'next/image';

// Server component - fetches data at build/request time
export default async function ProjectsPage() {
    const projects = await getPADProjects();

    return (
        <div style={{ padding: '27px 0' }}>
            <section style={{ marginBottom: '50px' }}>
                <h1 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>
                    Projects
                </h1>
            </section>

            {projects.length > 0 ? (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, 200px)',
                    gap: '25px'
                }}>
                    {projects.map((project) => (
                        <PADProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <div style={{ color: '#666' }}>
                    Coming soon...
                </div>
            )}
        </div>
    );
}

// Card component for PAD projects
function PADProjectCard({ project }: { project: NotionPADProject }) {
    const href = `/projects/${project.slug}`;

    return (
        <Link href={href} className="block hover:opacity-60" style={{ width: '200px' }}>
            {/* Image container */}
            <div style={{ width: '200px', height: '150px', background: '#e0e0e0', overflow: 'hidden' }}>
                {project.thumbnail ? (
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        width={200}
                        height={150}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        unoptimized
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
    );
}
