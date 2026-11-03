import React, { Component } from 'react';
import styles from './PortfolioItem.module.css';
import handleViewport from 'react-in-viewport';

/**
 * Displays an image along with descriptors as part of key value pairs.
 */
class PortfolioItem extends Component {
  render() {
    // customData is the actual data that will be displayed
    const { title, url_link, image, img_poster, sort_order, ...customData } = this.props.data;
    const { inViewport } = this.props;
    return (
      <div>
        <div className={styles.image}>
          <a href={url_link}>
            <video
              poster={'media/' + img_poster}
              className={inViewport ? styles.opaque : styles.transparent}
              muted
            >
              <source src={'media/' + image} type="video/mp4" />
              Browser not supported
            </video>
          </a>
        </div>
        <div className={styles.function}>
          <h3>{title}</h3>
          <ul>
            {Object.keys(customData).map(key => {
              return (
                <li key={key}>
                  <span>{key}</span>
                  <span className={styles.in_quotes}>{customData[key]}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default handleViewport(PortfolioItem, { rootMargin: '-20%' });
