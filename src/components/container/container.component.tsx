import React from 'react';
import BlurLayer from '../blurLayer/blurLayer.component';

import FlexContainer from '../flexContainer/flexContainer.component';

type ContainerProps = {
  children: JSX.Element | JSX.Element[];
};

const Container = ({ children }: ContainerProps) => {
  return <FlexContainer>{children}</FlexContainer>;
};

export default Container;
