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
import styles from './SidebarLayout.module.css';
import { NotionPADProject } from '@/lib/notion';

interface SidebarLayoutProps {
    children: React.ReactNode;
    projects: NotionPADProject[];
}

export default function SidebarLayout({ children, projects }: SidebarLayoutProps) {
    const pathname = usePathname();
    const teamProjects = projects;

    return (
        <div className={styles.sidebarLayout}>
            {/* Fixed Sidebar */}
            <aside className={styles.sidebar}>
                {/* Logo */}
                <div className={styles.sidebarLogo}>
                    <Link href="/" className={styles.logoLink}>
                        <span style={{ fontWeight: 700 }}>PAD</span>
                        <span style={{ fontWeight: 400 }}> - Pine at Dawn</span>
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

                    {/* Notes Link */}
                    <Link
                        href="/notes"
                        className={`${styles.navLink} ${pathname === '/notes' ? styles.navLinkActive : ''}`}
                        style={{ fontWeight: 700 }}
                    >
                        Notes
                    </Link>

                    {/* Contact Section */}
                    <div className={styles.navSection}>
                        <span className={styles.navLabel}>Contact</span>
                        <ul className={styles.projectList}>
                            <li>
                                <a
                                    href="https://www.instagram.com/pine_at_dawn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.navLink}
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:padcollective@gmail.com"
                                    className={styles.navLink}
                                >
                                    Mail
                                </a>
                            </li>
                        </ul>
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
