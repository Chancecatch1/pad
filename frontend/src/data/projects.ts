/* CHANGE NOTE
Why: Define team and personal projects data
What changed: Created projects data with sample entries including English Tutor
Behaviour/Assumptions: Projects can be filtered by contributor or isTeamProject
Rollback: Delete this file
— mj
*/

import { Project, MemberId } from '@/types';

export const projects: Project[] = [
    // Team Projects
    {
        slug: 'english-tutor',
        title: 'English Tutor',
        description: 'Chat with AI tutor.',
        longDescription: `Chat with AI tutor for English conversation practice.`,
        thumbnail: '/projects/english-tutor-thumb.png',
        techStack: ['Next.js', 'OpenAI', 'TypeScript', 'MongoDB'],
        contributors: ['mj', 'sol'],
        links: {
            demo: '/tutor',
        },
        isTeamProject: true,
        featured: true,
        date: '2024',
    },
    // Add more team projects here...
];

// Helper functions
export const getProjectBySlug = (slug: string): Project | undefined =>
    projects.find((p) => p.slug === slug);

export const getTeamProjects = (): Project[] =>
    projects.filter((p) => p.isTeamProject);

export const getMemberProjects = (memberId: MemberId): Project[] =>
    projects.filter((p) => p.contributors.includes(memberId));

export const getFeaturedProjects = (): Project[] =>
    projects.filter((p) => p.featured);
