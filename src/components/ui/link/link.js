import React from 'react';
import PropTypes from 'prop-types';

import { Link as GatsbyLink } from 'gatsby';
import classNames from 'classnames';

import styles from './link.module.css';

const Link = ({ type, ...rest }) => (
  <GatsbyLink
    className={classNames(styles.link, styles[`link_type_${type}`])}
    {...rest}
  />
);

Link.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
};

Link.defaultProps = {
  type: 'primary',
};

export default Link;
