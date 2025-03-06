import React from 'react';

interface RightArrowProps {
  fill: string;
}

const RightArrow: React.FC<RightArrowProps> = ({ fill }) => (
  <svg
    width="6"
    height="9"
    viewBox="0 0 6 9"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.33351 8.5L0.333496 4.5L4.33351 0.5L5.26685 1.43333L2.20017 4.5L5.26685 7.56667L4.33351 8.5Z" />
  </svg>
);

export default RightArrow;
