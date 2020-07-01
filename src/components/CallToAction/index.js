import React from 'react';

import Button from '../Button';
import SectionHeader from '../SectionHeader';

import styles from './styles.module.scss';

const CallToAction = () => (
  <div className={styles.container}>
    <SectionHeader
      title="Stay Updated"
      description="Give a final call to action because that's what the cool kids are doing."
    />
    <Button>Get Early Access</Button>
  </div>
);

export default CallToAction;
