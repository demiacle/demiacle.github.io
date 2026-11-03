import { lazy, Suspense, useState } from 'react';
import portfolioData from './portfolioData';
import PortfolioItem from './PortfolioItem';
import styles from './PortfolioContainer.module.css';

// Dev-only authoring tool; excluded from production builds.
const AddNewProjectModal = import.meta.env.DEV ? lazy(() => import('./AddNewProjectModal')) : null;

export default function PortfolioContainer() {
  const [isShowingNewItemForm, setShowingNewItemForm] = useState(false);

  return (
    <div className={styles.container}>
      {AddNewProjectModal && (
        <>
          <button type="button" className={styles.dev_options} onClick={() => setShowingNewItemForm(true)}>
            +
          </button>
          <Suspense fallback={null}>
            <AddNewProjectModal
              isOpen={isShowingNewItemForm}
              onRequestClose={() => setShowingNewItemForm(false)}
            />
          </Suspense>
        </>
      )}
      <div className={styles.project_container}>
        {portfolioData.map((project) => (
          <PortfolioItem key={project.title} data={project} />
        ))}
      </div>
    </div>
  );
}
