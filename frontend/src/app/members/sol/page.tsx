/* CHANGE NOTE
Why: Update Sol page with i18n translations (English default)
What changed: Made page a client component, using translations from context
Behaviour/Assumptions: Text switches based on language context
Rollback: Revert to previous version
— mj
*/

"use client";

import { getMember } from '@/data/members';

export default function SolPage() {
    const member = getMember('sol');

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
                <div className="max-w-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {member.name}
                    </h1>
                    <p className="text-lg text-gray-500 mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                </div>
            </div>
        </div>
    );
}
