import React from 'react';
import FlexContainer from '../flexContainer/flexContainer.component';

import './blurLayer.component.styles.scss';

type BlurLayerProps = {
  children: JSX.Element | JSX.Element[];
  width?: string;
  height?: string;
  className?: string;
};

const BlurLayer = ({
  children,
  width = '50%',
  height = '50%',
  className,
}: BlurLayerProps) => {
  return (
    <FlexContainer
      width={width}
      height={height}
      className={`blur-container bg-red-500 ${className}`}
    >
      {children}
    </FlexContainer>
  );
};

export default BlurLayer;
