import React from 'react';

import feature from '../../images/feature.png';
import SectionHeader from '../SectionHeader';

import styles from './styles.module.scss';

const Content = () => (
  <div className={styles.container}>
    <SectionHeader
      title="Minimal Features"
      description="Don't spend time ripping out unneeded plugins and bloat."
    />
    <content className={styles.content}>
      <div>
        <h3>What you need to Start</h3>
        <p className={styles.text}>
          Includes plugins for analytics, building sitemaps, and optimizing images
        </p>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
);

export default Content;
