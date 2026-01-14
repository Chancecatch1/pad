/* CHANGE NOTE
Why: Homepage shows PAD team projects (Projects section from sidebar)
What changed: Display team projects grid instead of member portfolio projects
Behaviour/Assumptions: Uses static team project data, not Notion portfolio
Rollback: Revert to previous version
— mj
*/

import Link from 'next/link';
import Image from 'next/image';
import { getPADProjects } from '@/lib/notion';
import styles from './page.module.css';

export const revalidate = 300; // ISR

export default async function HomePage() {
  const projects = await getPADProjects();

  return (
    <div style={{ padding: '27px 0' }}>
      <section style={{ marginBottom: '50px' }}>
        <h1 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>Projects</h1>
      </section>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className={styles.projectItem}
          >
            <div className={styles.thumbnailContainer}>
              {project.thumbnail ? (
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={200}
                  height={150}
                  className={styles.thumbnail}
                />
              ) : (
                <div className={styles.thumbnailPlaceholder}>
                  <span>{project.title.charAt(0)}</span>
                </div>
              )}
            </div>
            <div className={styles.projectTitle}>{project.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}