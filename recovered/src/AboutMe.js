import React, { Component } from 'react';
import styles from './AboutMe.module.css';
import Rating from 'react-rating';

const SVGIcon = ({ filled }) => {
  const color = '#1a9090';
  return (
    <svg
      style={{ backgroundSize: '10px' }}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 51 48"
    >
      <path
        fill={color}
        fillOpacity={filled ? '1' : '0'}
        stroke={color}
        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
      />
    </svg>
  );
};
function PersonalRating({ children, rating }) {
  return (
    <div>
      <Rating
        emptySymbol={<SVGIcon />}
        fullSymbol={<SVGIcon filled />}
        readonly
        initialRating={rating}
      />
      <p style={{ margin: '0 0 2rem 0', fontSize: '1.25rem' }}>{children}</p>
    </div>
  );
}

export default class AboutMe extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div>
            <img className={styles.portrait} src="media/headshot.jpg" alt="Pic of myself!" />
          </div>
          <div className={styles.blurb}>
            <p>Full stack developer specializing in MERN stack.</p>
            <div className={styles.skills}>
              <PersonalRating rating={5}>Javascript</PersonalRating>
              <PersonalRating rating={3}>Linux</PersonalRating>
              <PersonalRating rating={5}>HTML</PersonalRating>
              <PersonalRating rating={3}>C#</PersonalRating>
              <PersonalRating rating={5}>CSS</PersonalRating>
              <PersonalRating rating={2}>JAVA</PersonalRating>
              <PersonalRating rating={4}>NODE</PersonalRating>
              <PersonalRating rating={2}>PHP</PersonalRating>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
