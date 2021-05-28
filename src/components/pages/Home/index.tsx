import React, { FC, memo } from 'react';

interface IHomeProps {}

const Home: FC<IHomeProps> = (props) => {
  return <div>Hello</div>;
};

export default memo(Home);
