import styles from './Header.module.css';

const GITHUB_ICON_PATH =
  'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z';

interface Social {
  label: string;
  href: string;
  icon: string;
  /** Some source icons need a white backing to survive the invert filter. */
  whiteBacking?: boolean;
}

const SOCIALS: Social[] = [
  { label: 'Twitter', href: 'https://twitter.com/demiacle', icon: '/media/twitter2.png' },
  {
    label: 'CodePen',
    href: 'https://codepen.io/Demiacle/pens/public/?grid_type=list',
    icon: '/media/codepen2.png',
    whiteBacking: true,
  },
  { label: 'freeCodeCamp', href: 'https://www.freecodecamp.org/demiacle', icon: '/media/fcc_icon2.png' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/daniel-escobedo-b5165779',
    icon: '/media/linkedin2.png',
  },
];

const backing = { background: 'white', borderRadius: '20px' };

export default function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.inner_container} aria-label="Primary">
        <a className={styles.demiacle} href="/">
          Daniel&nbsp;Escobedo&nbsp;<span className={styles.transparent} aria-hidden="true">|</span>
          &nbsp;Demiacle
        </a>

        <ul className={styles.links}>
          <li>
            <a href="https://github.com/demiacle" aria-label="GitHub">
              <svg style={backing} aria-hidden="true" fill="#003e60" className={styles.icon} viewBox="0 0 16 16">
                <path d={GITHUB_ICON_PATH} />
              </svg>
            </a>
          </li>
          {SOCIALS.map(({ label, href, icon, whiteBacking }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <img
                  className={styles.icon}
                  style={whiteBacking ? backing : undefined}
                  src={icon}
                  alt=""
                  width={28}
                  height={28}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
