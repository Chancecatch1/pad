/* CHANGE NOTE
Why: Create member card for team section on homepage
What changed: New MemberCard component
Behaviour/Assumptions: Links to individual member portfolio page
Rollback: Delete this file
— mj
*/

import Link from 'next/link';
import { Member } from '@/types';

type Props = {
    member: Member;
};

export default function MemberCard({ member }: Props) {
    return (
        <Link
            href={`/members/${member.id}`}
            className="group inline-block p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
        >
            <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {member.name}
            </h3>
            <p className="text-base text-gray-500">{member.role}</p>
        </Link>
    );
}
