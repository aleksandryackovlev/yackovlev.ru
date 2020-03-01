import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import style from './label.module.css';

const Label = ({
  fontSize,
  isBold,
  className,
  children
}) => (
  <span className={classNames(
  style.label,
  fontSize && style[`label_font_${fontSize}`],
  isBold && style.label_bold_yes,
  className
)}>
    {children}
  </span>
);

Label.propTypes = {
  className: PropTypes.string,
  fontSize: PropTypes.oneOf([
    's',
    'm',
    'l'
  ]),
  isBold: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

Label.defaultProps = {
  className: '',
  fontSize: null,
  isBold: false
};

export default Label;
