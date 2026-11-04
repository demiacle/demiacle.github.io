import styles from './Header.module.css';

const LINKS = [
  { label: 'Demiacle', href: 'https://github.com/demiacle', title: 'GitHub' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/daniel-escobedo-b5165779/',
    title: 'LinkedIn',
  },
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
        {LINKS.map(({ label, href, title }) => (
          <span key={href} className={styles.item}>
            <Separator />
            <a
              className={styles.link}
              href={href}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          </span>
        ))}
      </nav>
    </header>
  );
}
