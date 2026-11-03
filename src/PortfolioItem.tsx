import styles from './PortfolioItem.module.css';
import type { Project } from './types';
import { useInViewport } from './useInViewport';

/**
 * Displays a project preview along with its descriptors rendered as
 * key/value pairs in a code-like layout.
 */
export default function PortfolioItem({ data }: { data: Project }) {
  // customData is the actual data that will be displayed
  const { title, url_link, image, img_poster, sort_order: _sortOrder, ...customData } = data;
  const { ref, inViewport } = useInViewport<HTMLDivElement>('-20%');

  return (
    <div ref={ref}>
      <div className={styles.image}>
        <a href={url_link}>
          <video
            poster={`/media/${img_poster}`}
            className={inViewport ? styles.opaque : styles.transparent}
            muted
            preload="none"
          >
            {image && <source src={`/media/${image}`} type="video/mp4" />}
            Browser not supported
          </video>
        </a>
      </div>
      <div className={styles.function}>
        <h3>{title}</h3>
        <ul>
          {Object.entries(customData).map(([key, value]) => (
            <li key={key}>
              <span>{key}</span>
              <span className={styles.in_quotes}>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
