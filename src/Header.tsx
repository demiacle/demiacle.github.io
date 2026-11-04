import styles from './Header.module.css';

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/demiacle' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniel-escobedo-b5165779/' },
];

function Separator() {
  return (
    <span className={styles.separator} aria-hidden="true">
      |
    </span>
  );
}

export default function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.inner_container} aria-label="Primary">
        <span className={styles.name}>Daniel&nbsp;Escobedo</span>
        {LINKS.map(({ label, href }) => (
          <span key={href} className={styles.item}>
            <Separator />
            <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
              {label}
              <span className={styles.external} aria-hidden="true">
                ↗
              </span>
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </span>
        ))}
      </nav>
    </header>
  );
}
