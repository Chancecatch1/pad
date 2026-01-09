/* CHANGE NOTE
Why: Notes and Contact grouped at bottom with same spacing as Mj/Sol
What changed: Created navBottomGroup for Notes and Contact together
Behaviour/Assumptions: Notes and Contact are close together at bottom
Rollback: Revert to previous version
— mj
*/

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getTeamProjects } from '@/data/projects';
import styles from './SidebarLayout.module.css';

interface SidebarLayoutProps {
    children: React.ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
    const pathname = usePathname();
    const teamProjects = getTeamProjects();

    return (
        <div className={styles.sidebarLayout}>
            {/* Fixed Sidebar */}
            <aside className={styles.sidebar}>
                {/* Logo */}
                <div className={styles.sidebarLogo}>
                    <Link href="/" className={styles.logoLink}>
                        PAD
                    </Link>
                </div>

                <nav className={styles.sidebarNav}>
                    {/* Projects Section - Label only, not clickable */}
                    <div className={styles.navSection}>
                        <span className={styles.navLabel}>Projects</span>
                        <ul className={styles.projectList}>
                            {teamProjects.map((project) => (
                                <li key={project.slug}>
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className={`${styles.navLink} ${pathname === `/projects/${project.slug}` ? styles.navLinkActive : ''}`}
                                    >
                                        {project.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About Section - Label only, not clickable */}
                    <div className={`${styles.navSection} ${styles.navAbout}`}>
                        <span className={styles.navLabel}>About</span>
                        <ul className={styles.projectList}>
                            <li>
                                <Link
                                    href="/members/mj"
                                    className={`${styles.navLink} ${pathname.startsWith('/members/mj') ? styles.navLinkActive : ''}`}
                                >
                                    Mj
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/members/sol"
                                    className={`${styles.navLink} ${pathname.startsWith('/members/sol') ? styles.navLinkActive : ''}`}
                                >
                                    Sol
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Bottom group - Notes and Contact together */}
                    <div className={styles.navBottomGroup}>
                        <Link
                            href="/notes"
                            className={`${styles.navLink} ${pathname === '/notes' ? styles.navLinkActive : ''}`}
                        >
                            Notes
                        </Link>
                        <Link
                            href="/contact"
                            className={`${styles.navLink} ${pathname === '/contact' ? styles.navLinkActive : ''}`}
                        >
                            Contact
                        </Link>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className={styles.mainContent}>
                {children}
            </main>
        </div>
    );
}
