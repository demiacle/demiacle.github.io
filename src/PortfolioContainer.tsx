import portfolioData from './portfolioData';
import PortfolioItem from './PortfolioItem';
import styles from './PortfolioContainer.module.css';

export default function PortfolioContainer() {
  return (
    <section className={styles.container} aria-labelledby="projects-heading">
      <h2 id="projects-heading" className={styles.heading}>
        {'// '}
        <span className={styles.heading_name}>projects</span>
      </h2>
      <ul className={styles.project_container}>
        {portfolioData.map((project) => (
          <li key={project.title}>
            <PortfolioItem data={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
