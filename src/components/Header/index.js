import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styles from './styles.module.scss';

const Header = ({ siteTitle }) => (
  <header className={styles.container}>
    <div>
      <h1 className={styles.siteTitle}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
