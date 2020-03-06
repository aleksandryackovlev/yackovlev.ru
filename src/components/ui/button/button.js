import React from 'react';
import classNames from 'classnames';
import { Link } from "gatsby"

import styles from './button.module.css';

const Button = ({ href, type, children, ...rest }) => (
  <Link
    to={href}
    className={classNames(styles.button, styles[`button_type_${type}`])}
    {...rest}
  >
    {children}
  </Link>
);

export default Button;
