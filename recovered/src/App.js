import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import PortfolioContainer from './PortfolioContainer';
import PortfolioItem from './PortfolioItem';
import AboutMe from './AboutMe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="inner_container">
            <AboutMe />
            <PortfolioContainer>
              <PortfolioItem />
            </PortfolioContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
