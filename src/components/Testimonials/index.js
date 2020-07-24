import React from 'react';

import styles from './styles.module.scss';

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h1>Here&apos;s What Our Customers Are Saying</h1>
      <div className={styles.testimonialGroup}>
        <div className={styles.testimonialCard1}>
          <div className={styles.testimonial1Photo} />
          <div className={styles.testimonial1Message}>
            <h2 className={styles.testimonial1Name}>Gregory Howzit</h2>
            <p className={styles.testimonial1Title}>Director, Data Science, FAANG</p>
            <blockquote className={styles.testimonial1Content}>
              This is the best product I&apos;ve used this year.
            </blockquote>
          </div>
        </div>
        <div className={styles.testimonialCard2}>
          <div className={styles.testimonial2Photo} />
          <div className={styles.testimonial2Message}>
            <h3 className={styles.testimonial2Name}>Jane Flannigan</h3>
            <p className={styles.testimonial2Title}>VP, Product Engineering, Hot Big Startup</p>
            <blockquote className={styles.testimonial2Content}>
              It has saved us so many hours! My team is way more productive and happy thanks to Landing.
            </blockquote>
          </div>
        </div>
        <div className={styles.testimonialCard3}>
          <div className={styles.testimonial3Photo} />
          <div className={styles.testimonial3Message}>
            <h3 className={styles.testimonial3Name}>Jake Tolstoy</h3>
            <p className={styles.testimonial3Title}>CTO, Cool Small Startup</p>
            <blockquote className={styles.testimonial3Content}>
              We have been able to iterate faster and meet our aggressive sprint goals because of Landing.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
