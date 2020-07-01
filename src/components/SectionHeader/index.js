import React from 'react';
import { string } from 'prop-types';

import styles from './styles.module.scss';

const SectionHeader = ({ title, description }) => (
  <>
    <h2>{title}</h2>
    <p className={styles.description}>{description}</p>
  </>
);

SectionHeader.propTypes = {
  description: string,
  title: string
};

export default SectionHeader;
