import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Footer = ({ siteTitle }) => (
  <footer className={styles.container}>
    <div className={styles.content}>
      <div className={styles.contactContainer}>
        <a className={styles.link} href="https://github.com/gillkyle/gatsby-starter-landing-page">
          Contact Us
        </a>
      </div>
      <div className={styles.date}>
        © {new Date().getFullYear()} {siteTitle}
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string
};

Footer.defaultProps = {
  siteTitle: ''
};

export default Footer;
