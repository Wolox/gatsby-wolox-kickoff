import React from 'react';

import mockupFrame from '../../images/mockup-frame.png';
import Button from '../Button';
import MockupContent from '../image';

import styles from './styles.module.scss';

const Hero = () => (
  <div className={styles.container}>
    <div className={styles.headerImage} />
    <h1 className={styles.title}>Landing Page Starter</h1>
    <p className={styles.subtitle}>
      This landing page looks great on all devices and is minimal in design. Add what you want and deploy.
    </p>
    <Button>Get Early Access</Button>
    <div className={styles.content}>
      <div className={styles.contentContainer}>
        <MockupContent />
      </div>
      <div className={styles.imageContainer}>
        <img src={mockupFrame} alt="outlines of shapes and confetti in the background " />
      </div>
    </div>
  </div>
);

export default Hero;
