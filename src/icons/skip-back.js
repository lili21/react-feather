import React from 'react';
import PropTypes from 'prop-types';

const SkipBack = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <polygon
        points="19 20 9 12 19 4 19 20"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <line
        x1="5"
        y1="19"
        x2="5"
        y2="5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

SkipBack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SkipBack.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default SkipBack;
