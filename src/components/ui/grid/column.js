import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import style from './grid.module.css';

const Column = ({
  children,
  alignSelf,
  width
}) => (
  <div
    className={classNames(
      style.col,
      style[`col_alignSelf_${alignSelf}`],
      style[`col_width_${width}`]
    )}
  >
    {children}
  </div>
);

Column.propTypes = {
  alignSelf: PropTypes.oneOf(['none', 'start', 'end', 'center']),
  width: PropTypes.oneOf([
    'equalWidth',
    'auto',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '11',
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

Column.defaultProps = {
  alignSelf: 'none',
  width: 'equalWidth'
};

export default Column;
