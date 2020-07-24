import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Backdrop from '../BackdropSection';

import styles from './styles.module.scss';

function Header({ siteTitle }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const navClasses = isOpen ? `${styles.navLinks} ${styles.navActive}` : styles.navLinks;
  const navItemClasses = isOpen ? styles.navLinkItemActive : styles.navLinkItem;
  const burgerClass = isOpen ? `${styles.burger} ${styles.toggle}` : styles.burger;
  const backdropClass = isOpen ? `${styles.backdrop} ${styles.backdropActive}` : styles.backdrop;

  return (
    <header>
      <Backdrop activeClass={backdropClass} click={toggle} />
      <nav className={styles.navbar}>
        <div className={styles.navBelt}>
          <div>
            <h4>
              <Link className={styles.logo} to="/">
                <div className={styles.logoImage} />
                {siteTitle}
              </Link>
            </h4>
          </div>
          <ul className={navClasses}>
            <li className={navItemClasses}>
              <a href="/#">About</a>
            </li>
            <li className={navItemClasses}>
              <a href="/#">Pricing</a>
            </li>
            <li className={navItemClasses}>
              <a href="/#">Login</a>
            </li>
            <li className={`${navItemClasses} ${styles.navItemBold}`}>
              <a href="/#">Sign Up</a>
            </li>
          </ul>
          <div className={burgerClass} onClick={toggle}>
            <div className={styles.burgerLine1} />
            <div className={styles.burgerLine2} />
            <div className={styles.burgerLine3} />
          </div>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
