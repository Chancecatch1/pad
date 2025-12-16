/* CHANGE NOTE
Why: Update project detail page with i18n translations
What changed: Made page a client component with wrapper for translations
Behaviour/Assumptions: Uses translations for UI text
Rollback: Revert to previous version
— mj
*/

"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { projects, getProjectBySlug } from '@/data/projects';
import { members } from '@/data/members';
import { useLanguage } from '@/context/LanguageContext';

export default function ProjectDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = getProjectBySlug(slug);
    const { t } = useLanguage();

    if (!project) {
        return (
            <div className="min-h-screen px-6 py-16 text-center">
                <h1 className="text-2xl font-bold text-gray-900">Project Not Found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen px-6 pt-24 pb-16">
            <div className="max-w-5xl mx-auto">
                <Link
                    href="/projects"
                    className="text-base text-gray-500 hover:text-gray-900 mb-6 inline-block"
                >
                    {t.backToProjects}
                </Link>

                <h1 className="text-base font-bold text-gray-900 mb-4">
                    {project.title}
                </h1>

                <p className="text-base text-gray-600 mb-6">{project.description}</p>

                {/* Tech Stack - hide for demo-only projects like English Tutor */}
                {!project.links.demo && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 rounded-xl border border-gray-200 text-base text-gray-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* Contributors - hide for demo-only projects */}
                {!project.links.demo && (
                    <div className="mb-8">
                        <h2 className="text-base font-bold text-gray-500 mb-2">{t.contributors}</h2>
                        <div className="flex gap-2">
                            {project.contributors.map((id) => {
                                const member = members[id];
                                return member ? (
                                    <Link
                                        key={id}
                                        href={`/members/${id}`}
                                        className="px-3 py-1 rounded-xl border border-gray-200 text-base text-gray-700 hover:border-gray-300 transition-colors"
                                    >
                                        {member.name}
                                    </Link>
                                ) : null;
                            })}
                        </div>
                    </div>
                )}

                {/* Long Description - hide for demo-only projects */}
                {project.longDescription && !project.links.demo && (
                    <div className="mb-8">
                        <p className="text-base text-gray-600 whitespace-pre-line">{project.longDescription}</p>
                    </div>
                )}

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                    {project.links.demo && (
                        <Link
                            href={project.links.demo}
                            className="px-4 py-2 rounded-xl bg-gray-900 text-white text-base hover:bg-gray-800 transition-colors"
                        >
                            {t.tryDemo}
                        </Link>
                    )}
                    {project.links.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-xl border border-gray-200 text-base text-gray-700 hover:border-gray-300 transition-colors"
                        >
                            {t.liveDemo}
                        </a>
                    )}
                    {project.links.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-xl border border-gray-200 text-base text-gray-700 hover:border-gray-300 transition-colors"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
