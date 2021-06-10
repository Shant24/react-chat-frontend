import React, { FC } from 'react';

import useWindowSize from '../../hooks/useWindowSize';

const PageLayout: FC = ({ children }) => {
  const { width, height } = useWindowSize();

  return <div style={{ maxWidth: width, width, maxHeight: height, height }}>{children}</div>;
};

export default PageLayout;
