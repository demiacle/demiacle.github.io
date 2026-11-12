import styles from './Header.module.css';

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/demiacle' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniel-escobedo-demiacle/' },
];

function ExternalArrow() {
  return (
    <svg
      className={styles.external}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 8.5 8.5 3.5M4.5 3.5h4v4" />
    </svg>
  );
}

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
              <ExternalArrow />
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </span>
        ))}
      </nav>
    </header>
  );
}
