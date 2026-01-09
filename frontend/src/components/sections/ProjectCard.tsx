/* CHANGE NOTE
Why: TeamVoid minimal style - no boxes, just text
What changed: Removed all border/rounded/shadow styles for clean text display
Behaviour/Assumptions: Simple text link with hover effect
Rollback: Revert to previous version with card styling
— mj
*/

import Link from 'next/link';
import { Project } from '@/types';

type Props = {
    project: Project;
    basePath?: string;
};

export default function ProjectCard({ project, basePath = '/projects' }: Props) {
    const href = project.links.demo ? project.links.demo : `${basePath}/${project.slug}`;

    return (
        <Link href={href} className="block hover:opacity-60 transition-opacity">
            <h3 className="font-bold text-black">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
        </Link>
    );
}
