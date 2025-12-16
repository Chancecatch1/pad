/* CHANGE NOTE
Why: Use curated portfolio projects with rich descriptions
What changed: Replaced GitHub API fetching with curated portfolio data
Behaviour/Assumptions: Portfolio data manually maintained with rich content
Rollback: Revert to previous version
— mj
*/

"use client";

import { useState } from 'react';
import { getMember } from '@/data/members';
import { getMemberProjects } from '@/data/projects';
import { portfolioProjects, getFeaturedPortfolioProjects } from '@/data/portfolio';
import ProjectCard from '@/components/sections/ProjectCard';
import PortfolioProjectCard from '@/components/sections/PortfolioProjectCard';
import { useLanguage } from '@/context/LanguageContext';

export default function MJPage() {
    const member = getMember('mj');
    const projects = getMemberProjects('mj');
    const { t } = useLanguage();
    const [showAllProjects, setShowAllProjects] = useState(false);

    const featuredProjects = getFeaturedPortfolioProjects();

    if (!member) {
        return (
            <div className="min-h-screen px-6 py-16 text-center">
                <h1 className="text-2xl font-bold text-gray-900">Member Not Found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen px-6 pt-24 pb-16">
            <div className="max-w-5xl mx-auto">
                {/* Profile Header */}
                <div className="mb-12 max-w-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {member.name}
                    </h1>
                    <p className="text-lg text-gray-500 mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 mt-4 flex-wrap">
                        {member.socials.website && (
                            <a
                                href={member.socials.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-900 transition-colors"
                            >
                                CV
                            </a>
                        )}
                        {member.socials.linkedin && (
                            <a
                                href={member.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-900 transition-colors"
                            >
                                LinkedIn
                            </a>
                        )}
                        {member.socials.github && (
                            <a
                                href={member.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-900 transition-colors"
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                </div>

                {/* Education */}
                <section className="mb-10 max-w-2xl">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
                    <div className="space-y-3 text-sm">
                        <div>
                            <div className="font-medium text-gray-900">University of Calgary</div>
                            <div className="text-gray-600">MSc, Electrical and Software Engineering (HXI Lab) · 2025 - present</div>
                        </div>
                        <div>
                            <div className="font-medium text-gray-900">Korea National Open University</div>
                            <div className="text-gray-600">BSc, Computer Science · 2024 - present</div>
                        </div>
                        <div>
                            <div className="font-medium text-gray-900">Soongsil University</div>
                            <div className="text-gray-600">BSc, Chemical Engineering · 2007 - 2014</div>
                        </div>
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-10 max-w-2xl">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Experience</h2>
                    <div className="space-y-3 text-sm">
                        <div>
                            <div className="font-medium text-gray-900">HXI Lab · Researcher</div>
                            <div className="text-gray-600">AR application development for CPR training · Aug 2025 - present</div>
                        </div>
                        <div>
                            <div className="font-medium text-gray-900">Books so Inc. · ML Engineer</div>
                            <div className="text-gray-600">RAG, sLLM, Voice Shifter, Heart Sound Classification · Dec 2023 - Sep 2024</div>
                        </div>
                        <div>
                            <div className="font-medium text-gray-900">Outlier · AI Trainer</div>
                            <div className="text-gray-600">AI prompt evaluation and annotation · Apr 2024 - Sep 2024</div>
                        </div>
                        <div>
                            <div className="font-medium text-gray-900">Seoul Foundation for Arts & Culture · Project Manager</div>
                            <div className="text-gray-600">100+ arts and culture events coordination · Feb 2020 - Aug 2023</div>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-10 max-w-2xl">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {['Python', 'TypeScript', 'Next.js', 'Svelte', 'Machine Learning', 'Computer Vision', 'LLM', 'Docker', 'Git'].map((skill) => (
                            <span key={skill} className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Team Projects */}
                <section className="mb-10 max-w-2xl">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">{t.projectsTitle}</h2>
                    {projects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {projects.map((project) => (
                                <ProjectCard
                                    key={project.slug}
                                    project={project}
                                    basePath={project.isTeamProject ? '/projects' : '/members/mj/projects'}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-gray-500">
                            {t.noProjects}
                        </div>
                    )}
                </section>

                {/* Portfolio Projects */}
                <section className="max-w-2xl">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Portfolio</h2>
                    <p className="text-gray-600 mb-6 text-sm">Featured projects showcasing my skills and experience</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {(showAllProjects ? portfolioProjects : featuredProjects).map((project) => (
                            <PortfolioProjectCard key={project.slug} project={project} />
                        ))}
                    </div>
                    {portfolioProjects.length > featuredProjects.length && (
                        <div className="mt-6">
                            <button
                                onClick={() => setShowAllProjects(!showAllProjects)}
                                className="text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                            >
                                {showAllProjects
                                    ? '← Show less'
                                    : `+ ${portfolioProjects.length - featuredProjects.length} more projects`
                                }
                            </button>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
