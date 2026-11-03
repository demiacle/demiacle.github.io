import Header from './Header';
import AboutMe from './AboutMe';
import PortfolioContainer from './PortfolioContainer';

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
        {new Date().getFullYear()} Daniel Escobedo
      </footer>
    </div>
  );
}
