/* CHANGE NOTE
Why: Display portfolio project as a detailed card
What changed: Created PortfolioProjectCard component
Behaviour/Assumptions: Shows project with rich info and links to detail page
Rollback: Delete this file
— mj
*/

import Link from 'next/link';
import { PortfolioProject } from '@/data/portfolio';

interface PortfolioProjectCardProps {
    project: PortfolioProject;
}

const categoryColors: Record<PortfolioProject['category'], string> = {
    research: 'bg-purple-100 text-purple-700',
    ml: 'bg-blue-100 text-blue-700',
    web: 'bg-green-100 text-green-700',
    automation: 'bg-orange-100 text-orange-700',
    study: 'bg-gray-100 text-gray-700',
};

const categoryLabels: Record<PortfolioProject['category'], string> = {
    research: 'Research',
    ml: 'ML/AI',
    web: 'Web',
    automation: 'Automation',
    study: 'Study',
};

export default function PortfolioProjectCard({ project }: PortfolioProjectCardProps) {
    return (
        <Link href={`/members/mj/portfolio/${project.slug}`}>
            <div className="rounded-xl border border-gray-200 bg-white p-5 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[project.category]}`}>
                                {categoryLabels[project.category]}
                            </span>
                            {project.featured && (
                                <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full">
                                    ⭐ Featured
                                </span>
                            )}
                        </div>
                        <h3 className="font-bold text-gray-900 text-base">
                            {project.title}
                        </h3>
                    </div>
                    <span className="text-xs text-gray-400">{project.date}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-3">
                    {project.techStack.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 4 && (
                        <span className="text-xs text-gray-400">
                            +{project.techStack.length - 4}
                        </span>
                    )}
                </div>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                    <div className="text-xs text-gray-500 border-t border-gray-100 pt-3">
                        {project.highlights.slice(0, 2).map((highlight, i) => (
                            <span key={i} className="inline-flex items-center mr-3">
                                <span className="w-1 h-1 bg-gray-400 rounded-full mr-1" />
                                {highlight}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
}
