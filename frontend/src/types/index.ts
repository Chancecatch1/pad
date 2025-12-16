/* CHANGE NOTE
Why: Define core types for PAD portfolio site - members and projects
What changed: Created new types file with Member, Project, and Note types
Behaviour/Assumptions: Types used across the app for type safety
Rollback: Delete this file
— mj
*/

export type MemberId = 'mj' | 'sol';

export type Member = {
    id: MemberId;
    name: string;
    role: string;
    bio: string;
    avatar: string;
    socials: {
        github?: string;
        linkedin?: string;
        email?: string;
        website?: string;
    };
};

export type Project = {
    slug: string;
    title: string;
    description: string;
    longDescription?: string;
    thumbnail: string;
    images?: string[];
    techStack: string[];
    contributors: MemberId[];
    links: {
        github?: string;
        live?: string;
        demo?: string; // internal demo route like /tutor
    };
    isTeamProject: boolean;
    featured?: boolean;
    date?: string;
};

export type GuestNote = {
    _id?: string;
    title: string;
    body?: string;
    createdAt?: string;
};

export type GitHubRepo = {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    language: string | null;
    topics: string[];
    stargazers_count: number;
    updated_at: string;
    pushed_at: string;
    isPrivate: boolean;
};
