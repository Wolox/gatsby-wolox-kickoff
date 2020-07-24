import React from 'react';
import { string, func } from 'prop-types';

function BackDrop({ activeClass, onClick }) {
  return <div className={activeClass} onClick={onClick} />;
}

BackDrop.propTypes = {
  onClick: func.isRequired,
  activeClass: string
};

export default BackDrop;
