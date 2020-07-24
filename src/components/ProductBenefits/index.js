import React from 'react';

import styles from './styles.module.scss';

function ProductBenefits() {
  return (
    <section className={styles.productBenefits}>
      <div className={styles.productBenefitsGroup}>
        <div className={styles.productBenefit1Tagline}>Here is product benefit 1. Isn&apos;t it amazing?</div>
        <div className={styles.productBenefit1Image} />
        <div className={styles.productBenefit2Tagline}>
          Here is product benefit 2. I can do this all day long.
        </div>
        <div className={styles.productBenefit2Image} />
        <div className={styles.productBenefit3Tagline}>
          Boom. Product benefit 3. Kills any last remaining doubts no?
        </div>
        <div className={styles.productBenefit3Image} />
      </div>
    </section>
  );
}

export default ProductBenefits;
