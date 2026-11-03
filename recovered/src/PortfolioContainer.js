import React, { Component } from 'react';
import portfolioData from './portfolioData';
import PortfolioItem from './PortfolioItem';
import styles from './PortfolioContainer.module.css';
import AddNewProjectModal from './AddNewProjectModal';

export default class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingNewItemForm: false
    };
  }
  showModal = () => {
    this.setState({ isShowingNewItemForm: true });
  };
  hideModal = () => {
    this.setState({ isShowingNewItemForm: false });
  };

  renderDevOptions() {
    if (window.location.href.includes('localhost') || window.location.href.includes('127.0.0.1')) {
      return (
        <div className={styles.dev_options} onClick={this.showModal}>
          +
        </div>
      );
    }
  }

  render() {
    return (
      <div className={styles.container}>
        {this.renderDevOptions()}
        <AddNewProjectModal
          isOpen={this.state.isShowingNewItemForm}
          onRequestClose={this.hideModal}
        />
        <div className={styles.project_container}>
          {portfolioData.map((i, index) => (
            <PortfolioItem key={index} data={i} />
          ))}
        </div>
      </div>
    );
  }
}
