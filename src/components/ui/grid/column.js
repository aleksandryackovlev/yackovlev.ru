import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import style from './grid.module.css';

const Column = ({ children, alignSelf, xs, sm, md, lg, xl }) => {
  return (
    <div
      className={classNames(
        style.col,
        style[`col_alignSelf_${alignSelf}`],
        style[`col_xs_${xs}`],
        sm && style[`col_sm_${sm}`],
        md && style[`col_md_${md}`],
        lg && style[`col_lg_${lg}`],
        xl && style[`col_xl_${xl}`]
      )}
    >
      {children}
    </div>
  );
};

Column.propTypes = {
  alignSelf: PropTypes.oneOf(['none', 'start', 'end', 'center']),
  xs: PropTypes.oneOf([
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
    '12',
  ]),
  sm: PropTypes.oneOf([
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
    '12',
  ]),
  md: PropTypes.oneOf([
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
    '12',
  ]),
  lg: PropTypes.oneOf([
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
    '12',
  ]),
  xl: PropTypes.oneOf([
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
    '12',
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Column.defaultProps = {
  alignSelf: 'none',
  xs: 'equalWidth',
  sm: null,
  md: null,
  lg: null,
  xl: null,
};

export default Column;
