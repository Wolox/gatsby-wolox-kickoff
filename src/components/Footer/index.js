import React from 'react';
import { string } from 'prop-types';

import styles from './styles.module.scss';

function Footer({ siteTitle }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBelt}>
        <div className={styles.companySign}>&copy; 2020 {siteTitle}</div>
        <div className={styles.socialMedia}>
          <a href="https://www.facebook.com">
            <div className={styles.socialFacebook}>Facebook</div>
          </a>
          <a href="https://www.twitter.com">
            <div className={styles.socialTwitter}>Twitter</div>
          </a>
          <a href="https://www.instagram.com">
            <div className={styles.socialInstagram}>Instagram</div>
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  siteTitle: string.isRequired
};

export default Footer;
