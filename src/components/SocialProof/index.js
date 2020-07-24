import React from 'react';

import styles from './styles.module.scss';

function SocialProof() {
  return (
    <section className={styles.socialProof}>
      <div className={styles.socialProofIcons}>
        <div className={styles.uber} />
        <div className={styles.google} />
        <div className={styles.twitter} />
        <div className={styles.apple} />
        <div className={styles.facebook} />
      </div>
    </section>
  );
}

export default SocialProof;
