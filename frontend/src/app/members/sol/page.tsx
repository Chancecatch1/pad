/* CHANGE NOTE
Why: Match Sol page style with MJ page
What changed: Updated font sizes and spacing to match MJ's page style
Behaviour/Assumptions: Same visual style as MJ page
Rollback: Revert to previous version
— mj
*/

"use client";

import { getMember } from '@/data/members';

export default function SolPage() {
    const member = getMember('sol');

    if (!member) {
        return (
            <div className="py-8">
                <p>Member Not Found</p>
            </div>
        );
    }

    return (
        <div className="py-8">
            {/* Profile Header - same style as MJ page */}
            <section className="mb-8">
                <h1 className="font-bold text-lg mb-1">{member.name}</h1>
                <p className="text-gray-500 mb-4">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
            </section>
        </div>
    );
}
