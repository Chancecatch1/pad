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
        <div style={{ padding: '27px 0' }}>
            {/* Profile Header - same style as MJ page */}
            <section style={{ marginBottom: '50px' }}>
                <h1 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>{member.name}</h1>
                <p style={{ color: '#666', marginBottom: '16px', lineHeight: '1.6' }}>{member.role}</p>
                <p style={{ color: '#444', lineHeight: '1.7' }}>{member.bio}</p>
            </section>
        </div>
    );
}
