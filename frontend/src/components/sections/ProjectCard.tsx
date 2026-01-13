/* CHANGE NOTE
Why: TeamVoid minimal style - no boxes, just text
What changed: Removed all border/rounded/shadow styles for clean text display
Behaviour/Assumptions: Simple text link with hover effect
Rollback: Revert to previous version with card styling
— mj
*/

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';

type Props = {
    project: Project;
    basePath?: string;
};

export default function ProjectCard({ project, basePath = '/projects' }: Props) {
    const href = project.links.demo ? project.links.demo : `${basePath}/${project.slug}`;

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
