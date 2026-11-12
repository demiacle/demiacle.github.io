import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <section className={styles.container} aria-labelledby="about-heading">
      <img
        className={styles.portrait}
        src="/media/headshot.jpg"
        alt="Daniel Escobedo"
        width={160}
        height={160}
        fetchPriority="high"
      />
      <div className={styles.intro}>
        <h1 id="about-heading" className={styles.tagline}>
          Full Stack Developer.
        </h1>
        {/* DRAFT positioning line for review; replace with your own words. */}
        <p className={styles.lede}>
          I bring digital ideas to life, building everything from the underlying systems to the experiences people interact with.
        </p>
      </div>
    </section>
  );
}
