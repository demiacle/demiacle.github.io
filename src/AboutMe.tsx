import type { ReactNode } from 'react';
import styles from './AboutMe.module.css';

const STAR_COLOR = '#1a9090';
const MAX_RATING = 5;

function Star({ filled }: { filled: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 51 48" aria-hidden="true">
      <path
        fill={STAR_COLOR}
        fillOpacity={filled ? 1 : 0}
        stroke={STAR_COLOR}
        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
      />
    </svg>
  );
}

// Read-only replacement for the old `react-rating` dependency.
function PersonalRating({ children, rating }: { children: ReactNode; rating: number }) {
  return (
    <div>
      <span role="img" aria-label={`${rating} out of ${MAX_RATING}`}>
        {Array.from({ length: MAX_RATING }, (_, i) => (
          <Star key={i} filled={i < rating} />
        ))}
      </span>
      <p style={{ margin: '0 0 2rem 0', fontSize: '1.25rem' }}>{children}</p>
    </div>
  );
}

const SKILLS: Array<[name: string, rating: number]> = [
  ['Javascript', 5],
  ['Linux', 3],
  ['HTML', 5],
  ['C#', 3],
  ['CSS', 5],
  ['JAVA', 2],
  ['NODE', 4],
  ['PHP', 2],
];

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div>
          <img className={styles.portrait} src="/media/headshot.jpg" alt="Daniel Escobedo" />
        </div>
        <div className={styles.blurb}>
          <p>Full stack developer specializing in MERN stack.</p>
          <div className={styles.skills}>
            {SKILLS.map(([name, rating]) => (
              <PersonalRating key={name} rating={rating}>
                {name}
              </PersonalRating>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
