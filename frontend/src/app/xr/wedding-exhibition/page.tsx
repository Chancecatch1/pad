import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Wedding Exhibition XR | PAD',
  description: 'A WebXR prototype of the PAD wedding exhibition archive, exported from Unity with Needle Engine.',
};

export default function WeddingExhibitionXRPage() {
  return (
    <main className={styles.stage}>
      <iframe
        className={styles.frame}
        src="/xr/wedding-exhibition-needle/index.html"
        title="PAD Wedding Exhibition XR"
        allow="accelerometer; gyroscope; gamepad; fullscreen; xr-spatial-tracking"
        allowFullScreen
      />
      <div className={styles.chrome}>
        <Link className={styles.backLink} href="/projects">
          PAD
        </Link>
        <span className={styles.title}>Wedding Exhibition XR</span>
      </div>
    </main>
  );
}
