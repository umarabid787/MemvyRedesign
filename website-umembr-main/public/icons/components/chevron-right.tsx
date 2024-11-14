import React from 'react';

interface IconProps {
  color: string;
}

const ChevronRightIconComponent: React.FC<IconProps> = ({ color }) => (
  <svg width='8' height='10' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z' fill={color} />
  </svg>
);

export default ChevronRightIconComponent;
