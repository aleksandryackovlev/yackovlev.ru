import React from 'react';
import PropTypes from 'prop-types';

import style from './container.module.css';

const Container = ({ children }) => (
  <div className={style.container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Container;
