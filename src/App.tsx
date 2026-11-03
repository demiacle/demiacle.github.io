import './App.css';
import Header from './Header';
import AboutMe from './AboutMe';
import PortfolioContainer from './PortfolioContainer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="inner_container">
          <AboutMe />
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}
