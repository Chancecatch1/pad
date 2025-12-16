/* CHANGE NOTE
Why: Update Projects page with i18n translations (English default)
What changed: Made page a client component, using translations from context
Behaviour/Assumptions: Text switches based on language context
Rollback: Revert to previous version
— mj
*/

"use client";

import { getTeamProjects } from '@/data/projects';
import ProjectCard from '@/components/sections/ProjectCard';
import { useLanguage } from '@/context/LanguageContext';

export default function ProjectsPage() {
    const projects = getTeamProjects();
    const { t } = useLanguage();

    return (
        <div className="min-h-screen px-6 pt-24 pb-16">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-base font-bold text-gray-900 mb-6">
                    {t.projectsTitle}
                </h1>

                {projects.length > 0 ? (
                    <div className="max-w-2xl space-y-4">
                        {projects.map((project) => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 text-gray-500">
                        {t.noProjects}
                    </div>
                )}
            </div>
        </div>
    );
}
