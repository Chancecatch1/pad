/* CHANGE NOTE
Why: Define team member profiles for MJ and Sol
What changed: Created members data file with placeholder content
Behaviour/Assumptions: Data will be updated with real info later
Rollback: Delete this file
— mj
*/

import { Member } from '@/types';

export const members: Record<string, Member> = {
    mj: {
        id: 'mj',
        name: 'Mj',
        role: 'HXI Researcher & ML Engineer',
        bio: "Master's student at the University of Calgary, HXI (Human-X Interaction) Researcher. Expertise in AI model development and web deployment, with 5+ years in arts and culture.",
        avatar: '/members/mj-avatar.png',
        socials: {
            github: 'https://github.com/chancecatch1',
            linkedin: 'https://www.linkedin.com/in/mlmj',
            email: 'padcollective@gmail.com',
            website: 'https://nova-walker-aa5.notion.site/Mj-s-CV-18b7d9f7331380d79ab7c0af9e1217e2',
        },
    },
    sol: {
        id: 'sol',
        name: 'Sol',
        role: 'Designer',
        bio: '',
        avatar: '/members/sol-avatar.png',
        socials: {},
    },
};

export const getMember = (id: string): Member | undefined => members[id];

export const getAllMembers = (): Member[] => Object.values(members);
