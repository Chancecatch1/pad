/* CHANGE NOTE
Why: TeamVoid minimal style - simple contact, no boxes
What changed: Removed all card styles, just email text
Behaviour/Assumptions: Clean text-only display
Rollback: Revert to previous version
— mj
*/

export default function ContactPage() {
    return (
        <div style={{ padding: '27px 0' }}>
            <h1 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>Contact</h1>
            <a href="mailto:padcollective@gmail.com" className="hover:opacity-60">
                padcollective@gmail.com
            </a>
        </div>
    );
}
