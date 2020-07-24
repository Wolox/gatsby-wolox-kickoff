import React from 'react';

import styles from './styles.module.scss';

function CallToAction() {
  return (
    <section className={styles.cta}>
      <h1>Try our awesome product.</h1>
      <p>There&apos;s nothing to lose. 30 days free trial.</p>
      <button type="button" className="button">
        Get Started
      </button>
    </section>
  );
}

export default CallToAction;
