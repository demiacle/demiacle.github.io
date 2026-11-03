import Header from './Header';
import AboutMe from './AboutMe';
import PortfolioContainer from './PortfolioContainer';

// Read once at module load so rendering stays pure.
const YEAR = new Date().getFullYear();

export default function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" className="page">
        <AboutMe />
        <PortfolioContainer />
      </main>
      <footer className="site-footer">
        {'// © '}
        {YEAR} Daniel Escobedo
      </footer>
    </div>
  );
}
