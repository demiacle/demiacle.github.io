import styles from './PortfolioItem.module.css';
import type { Project } from './types';
import { useInViewport } from './useInViewport';

/**
 * A project card: screenshot on top, descriptors below rendered as a
 * pseudo-JavaScript function (`function newProject( title ){ ... }`).
 */
export default function PortfolioItem({ data }: { data: Project }) {
  // customData is everything shown as `key: "value"` lines on the card.
  const { title, url_link, img_poster, sort_order: _sortOrder, ...customData } = data;
  const { ref, inViewport } = useInViewport<HTMLElement>('-20%');

  return (
    <article
      ref={ref}
      className={`${styles.card} ${inViewport ? styles.opaque : styles.transparent}`}
      data-linked={url_link ? '' : undefined}
    >
      <img
        className={styles.image}
        src={`/media/${img_poster}`}
        alt=""
        width={540}
        height={300}
        loading="lazy"
        decoding="async"
      />
      <div className={styles.function}>
        <h3>
          {url_link ? (
            <a className={styles.link} href={url_link}>
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <ul>
          {Object.entries(customData).map(([key, value]) => (
            <li key={key}>
              <span>{key}</span>
              <span className={styles.in_quotes}>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
