import styles from './PortfolioItem.module.css';
import type { Project } from './types';
import { useInViewport } from './useInViewport';

const isTodo = (text: string) => text.startsWith('TODO');

/** "a · b · c" -> ["a", "b", "c"] */
const splitList = (value: unknown) =>
  String(value)
    .split('·')
    .map((part) => part.trim())
    .filter(Boolean);

/**
 * A project card: screenshot beside a short description, feature list and
 * stack tags. `flip` puts the screenshot on the right (alternating layout).
 * Any extra fields in a project file are listed under the stack.
 */
export default function PortfolioItem({ data, flip = false }: { data: Project; flip?: boolean }) {
  const {
    title,
    url_link,
    img_poster,
    sort_order: _sortOrder,
    featured: _featured,
    about,
    features,
    stack,
    image_note,
    ...extra
  } = data;
  const { ref, inViewport } = useInViewport<HTMLElement>('-20%');
  const todo = (text: string) => (isTodo(text) ? styles.todo : undefined);
  const screenshot = (
    <img
      className={styles.image}
      src={`/media/${img_poster}`}
      alt=""
      width={540}
      height={300}
      loading="lazy"
      decoding="async"
    />
  );

  return (
    <article
      ref={ref}
      className={`${styles.card} ${inViewport ? styles.opaque : styles.transparent}`}
      data-flip={flip ? '' : undefined}
    >
      <div className={styles.media}>
        {url_link ? (
          <a
            className={styles.imageLink}
            href={url_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {screenshot}
            <span className={styles.visit} aria-hidden="true">
              Visit site ↗
            </span>
            <span className="sr-only">Visit {title} (opens in new tab)</span>
          </a>
        ) : (
          screenshot
        )}
        {image_note !== undefined && <span className={styles.note}>{String(image_note)}</span>}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>

        {about !== undefined && (
          <p className={`${styles.about} ${todo(String(about)) ?? ''}`}>{String(about)}</p>
        )}

        {features !== undefined && (
          <ul className={styles.features}>
            {splitList(features).map((feature) => (
              <li key={feature} className={todo(feature)}>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {stack !== undefined && (
          <ul className={styles.stack} aria-label="Built with">
            {splitList(stack).map((tech) => (
              <li key={tech} className={todo(tech)}>
                {tech}
              </li>
            ))}
          </ul>
        )}

        {Object.keys(extra).length > 0 && (
          <dl className={styles.extra}>
            {Object.entries(extra).map(([key, value]) => (
              <div key={key}>
                <dt>{key}</dt>
                <dd className={todo(String(value))}>{String(value)}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </article>
  );
}
