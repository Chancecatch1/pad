/* CHANGE NOTE
Why: Create project card for displaying projects in grid
What changed: New reusable ProjectCard component
Behaviour/Assumptions: Accepts Project type, links to project detail or demo directly
Rollback: Delete this file
— mj
*/

import Link from 'next/link';
import { Project } from '@/types';

type Props = {
    project: Project;
    basePath?: string; // e.g., '/projects' or '/members/mj/projects'
};

export default function ProjectCard({ project, basePath = '/projects' }: Props) {
    // If project has a demo link, go directly to the demo page
    const href = project.links.demo ? project.links.demo : `${basePath}/${project.slug}`;

    return (
        <Link
            href={href}
            className="group inline-block rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 p-4"
        >
            <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {project.title}
            </h3>
            <p className="mt-1 text-base text-gray-600">
                {project.description}
            </p>
        </Link>
    );
}
