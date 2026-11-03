import portfolioData from './portfolioData';
import PortfolioItem from './PortfolioItem';
import styles from './PortfolioContainer.module.css';

export default function PortfolioContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.project_container}>
        {portfolioData.map((project) => (
          <PortfolioItem key={project.title} data={project} />
        ))}
      </div>
    </div>
  );
}
