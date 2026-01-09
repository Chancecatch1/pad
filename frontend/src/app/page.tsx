/* CHANGE NOTE
Why: Homepage shows PAD team projects (Projects section from sidebar)
What changed: Display team projects grid instead of member portfolio projects
Behaviour/Assumptions: Uses static team project data, not Notion portfolio
Rollback: Revert to previous version
— mj
*/

import Link from 'next/link';
import Image from 'next/image';
import { getTeamProjects } from '@/data/projects';
import styles from './page.module.css';

export default function HomePage() {
  const projects = getTeamProjects();

  return (
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
  );
}