/* CHANGE NOTE
Why: Update homepage with i18n translations (English default)
What changed: Made page a client component, using translations from context
Behaviour/Assumptions: Text switches based on language context
Rollback: Revert to previous version
— mj
*/

"use client";

import Link from 'next/link';
import { getAllMembers } from '@/data/members';
import { getFeaturedProjects } from '@/data/projects';
import ProjectCard from '@/components/sections/ProjectCard';
import MemberCard from '@/components/sections/MemberCard';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const members = getAllMembers();
  const featuredProjects = getFeaturedProjects();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Projects - First */}
      {featuredProjects.length > 0 && (
        <section className="px-6 pt-24 pb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-base font-bold text-gray-900 mb-6">
              {t.projects}
            </h2>
            <div className="max-w-2xl space-y-4">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/projects"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {t.viewAllProjects}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Team Members */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-base font-bold text-gray-900 mb-6">
            {t.meetTheTeam}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}