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
        <div style={{ padding: '27px 0' }}>
            <section style={{ marginBottom: '50px' }}>
                <h1 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>
                    {t.projectsTitle}
                </h1>
            </section>

            {projects.length > 0 ? (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, 200px)',
                    gap: '25px'
                }}>
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            ) : (
                <div style={{ color: '#666' }}>
                    {t.noProjects}
                </div>
            )}
        </div>
    );
}
