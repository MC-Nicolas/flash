import React from 'react';

type FlexContainerProps = {
  children: JSX.Element[] | JSX.Element | any;
  width?: string;
  height?: string;
  flex?: string;
  justify?: string;
  className?: string;
};

const FlexContainer = ({
  children,
  width = '100%',
  height = '100%',
  justify = 'center',
  flex = 'row',
  className,
}: FlexContainerProps) => {
  return (
    <div
      className={`flex flex-${flex} justify-${justify} items-center align-center w-full h-full ${className}`}
      style={{ width, height }}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
