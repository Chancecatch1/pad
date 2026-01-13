/* CHANGE NOTE
Why: Show loading indicator while project page is loading
What changed: Simple loading text display
Behaviour/Assumptions: Displayed automatically while page fetches data
Rollback: Delete this file
— mj
*/

export default function Loading() {
    return (
        <div style={{ padding: '27px 0', maxWidth: '800px' }}>
            <div style={{ color: '#666' }}>Loading...</div>
        </div>
    );
}
