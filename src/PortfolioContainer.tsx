import Constellation from './Constellation';
import portfolioData from './portfolioData';
import PortfolioItem from './PortfolioItem';
import styles from './PortfolioContainer.module.css';

const featured = portfolioData.filter((p) => p.featured);

export default function PortfolioContainer() {
  return (
    <section className={styles.container} aria-labelledby="projects-heading">
      <Constellation />
      <h2 id="projects-heading" className={styles.heading}>
        <span className={styles.heading_name}>Professional Work</span>
      </h2>
      <ul className={styles.project_container}>
        {featured.map((project, i) => (
          <li key={project.title}>
            <PortfolioItem data={project} flip={i % 2 === 1} />
          </li>
        ))}
      </ul>
    </section>
  );
}
