/* CHANGE NOTE
Why: Add Sol's portfolio link with thumbnail image
What changed: Added opd.png image that links to onepineday.com
Behaviour/Assumptions: Same thumbnail layout as MJ's project grid
Rollback: Revert to previous version
— mj
*/

"use client";

import { getMember } from '@/data/members';
import opdImage from '@/images/opd.png';

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
                <p style={{ color: '#666', lineHeight: '1.6' }}>{member.role}</p>
            </section>

            {/* Works - Image Grid (same layout as MJ) */}
            <section>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, 200px)',
                        gap: '25px'
                    }}
                >
                    {/* One Pine Day Portfolio Link */}
                    <a
                        href="https://onepineday.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:opacity-60"
                        style={{ width: '200px' }}
                    >
                        {/* Image container */}
                        <div style={{ width: '200px', height: '150px', background: '#e0e0e0', overflow: 'hidden' }}>
                            <img
                                src={opdImage.src}
                                alt="One Pine Day"
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                        </div>
                        {/* Title below image */}
                        <div style={{
                            fontSize: '13px',
                            lineHeight: '16.9px',
                            color: '#000',
                            textAlign: 'center',
                            marginTop: '4px'
                        }}>
                            One Pine Day
                        </div>
                    </a>
                </div>
            </section>
        </div>
    );
}
