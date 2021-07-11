import React, { CSSProperties, FC } from 'react';

import useWindowSize from '../../hooks/useWindowSize';

interface IContainerStyle extends CSSProperties {
  '--100vw': string;
  '--100vh': string;
}

const PageLayout: FC = ({ children }) => {
  const { width, height } = useWindowSize();

  return (
    <div
      style={
        {
          maxWidth: width,
          width,
          maxHeight: height,
          height,
          '--100vw': `${width}px`,
          '--100vh': `${height}px`,
        } as IContainerStyle
      }
    >
      {children}
    </div>
  );
};

export default PageLayout;
