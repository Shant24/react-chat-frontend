import React, { memo } from 'react';

const PauseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
    >
      <path fill="none" d="M0 0H32V32H0z" />
      <g>
        <path d="M20 4H28V28H20z" />
        <path d="M4 4H12V28H4z" />
      </g>
    </svg>
  );
};

export default memo(PauseIcon);
