import React from 'react';

import styles from './styles.module.scss';

function ValueProp() {
  return (
    <section className={styles.valueProp}>
      <div className={styles.valuePropContent}>
        <div className={styles.mainMessage}>
          <h1>Here is our amazing product</h1>
          <p className={styles.mainSubtitle}>
            Please buy our amazing product. You&apos;re gonna love it. Promise.
          </p>
          <button type="button" className="button">
            Get Started
          </button>
        </div>
        <div className={styles.mainPhoto} />
      </div>
    </section>
  );
}

export default ValueProp;
