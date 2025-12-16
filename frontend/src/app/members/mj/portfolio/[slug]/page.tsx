/* CHANGE NOTE
Why: Display detailed portfolio project page
What changed: Created portfolio project detail page with full description
Behaviour/Assumptions: Shows project details and links to GitHub
Rollback: Delete this file
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
            <div className="min-h-screen px-6 py-16 text-center">
                <h1 className="text-2xl font-bold text-gray-900">Project Not Found</h1>
                <Link href="/members/mj" className="text-blue-600 hover:underline mt-4 inline-block">
                    ← Back to Portfolio
                </Link>
            </div>
        );
    }

    const categoryColors: Record<string, string> = {
        research: 'bg-purple-100 text-purple-700',
        ml: 'bg-blue-100 text-blue-700',
        web: 'bg-green-100 text-green-700',
        automation: 'bg-orange-100 text-orange-700',
        study: 'bg-gray-100 text-gray-700',
    };

    const categoryLabels: Record<string, string> = {
        research: 'Research',
        ml: 'ML/AI',
        web: 'Web',
        automation: 'Automation',
        study: 'Study',
    };

    return (
        <div className="min-h-screen px-6 py-16">
            <div className="max-w-3xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/members/mj"
                    className="text-gray-500 hover:text-gray-900 transition-colors mb-8 inline-block"
                >
                    ← Back to Portfolio
                </Link>

                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                        <span className={`text-sm px-3 py-1 rounded-full ${categoryColors[project.category]}`}>
                            {categoryLabels[project.category]}
                        </span>
                        {project.featured && (
                            <span className="text-sm px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                                ⭐ Featured
                            </span>
                        )}
                        <span className="text-sm text-gray-400">{project.date}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {project.title}
                    </h1>
                    <p className="text-lg text-gray-600">
                        {project.description}
                    </p>
                </div>

                {/* Links */}
                <div className="flex gap-4 mb-8">
                    {project.links.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            GitHub →
                        </a>
                    )}
                    {project.links.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Live Demo →
                        </a>
                    )}
                </div>

                {/* Tech Stack */}
                <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Tech Stack</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                    <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Key Highlights</h2>
                        <ul className="space-y-2">
                            {project.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                    <span className="text-blue-500 mt-1">•</span>
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Long Description */}
                <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">About This Project</h2>
                    <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                        {project.longDescription}
                    </div>
                </section>

                {/* Languages */}
                <section className="rounded-xl border border-gray-200 bg-white p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Languages</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.languages.map((lang) => (
                            <span
                                key={lang}
                                className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full"
                            >
                                {lang}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
