import styles from './AboutMe.module.css';

const MAX_RATING = 5;

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

function Star({ filled }: { filled: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 51 48" aria-hidden="true">
      <path
        fillOpacity={filled ? 1 : 0}
        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
      />
    </svg>
  );
}

function Skill({ name, rating }: { name: string; rating: number }) {
  return (
    <li className={styles.skill}>
      <span className={styles.stars} aria-hidden="true">
        {Array.from({ length: MAX_RATING }, (_, i) => (
          <Star key={i} filled={i < rating} />
        ))}
      </span>
      <span className={styles.skillName}>{name}</span>
      <span className="sr-only">{`, ${rating} out of ${MAX_RATING}`}</span>
    </li>
  );
}

export default function AboutMe() {
  return (
    <section className={styles.container} aria-labelledby="about-heading">
      <img
        className={styles.portrait}
        src="/media/headshot.jpg"
        alt="Daniel Escobedo"
        width={240}
        height={240}
        fetchPriority="high"
      />
      <div className={styles.blurb}>
        <h1 id="about-heading" className={styles.tagline}>
          Full stack developer specializing in MERN stack.
        </h1>
        <ul className={styles.skills} aria-label="Skills">
          {SKILLS.map(([name, rating]) => (
            <Skill key={name} name={name} rating={rating} />
          ))}
        </ul>
      </div>
    </section>
  );
}
