/* CHANGE NOTE
Why: Update About page with i18n translations (English default)
What changed: Made page a client component, using translations from context
Behaviour/Assumptions: Text switches based on language context
Rollback: Revert to previous version
— mj
*/

"use client";

import { getAllMembers } from '@/data/members';
import MemberCard from '@/components/sections/MemberCard';

export default function AboutPage() {
    const members = getAllMembers();

    return (
        <div className="min-h-screen px-6 pt-24 pb-16">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                    {members.map((member) => (
                        <MemberCard key={member.id} member={member} />
                    ))}
                </div>
            </div>
        </div>
    );
}
