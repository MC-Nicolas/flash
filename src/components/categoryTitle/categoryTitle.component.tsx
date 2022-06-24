import React from 'react';

import FlexContainer from '../flexContainer/flexContainer.component';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import BlurLayer from '../blurLayer/blurLayer.component';
import ButtonIcon from '../buttonIcon/buttonIcon.component';

type CategoryTitleProps = {
  title: string;
};

const CategoryTitle = ({ title }: CategoryTitleProps) => {
  return (
    <FlexContainer height='50px'>
      <BlurLayer
        className='justify-between px-10 bg-slate-100'
        height='50px'
        width='100%'
      >
        <ButtonIcon icon={<ArrowBackIosNewIcon />} />

        <h1>{title}</h1>
        <span></span>
      </BlurLayer>
    </FlexContainer>
  );
};

export default CategoryTitle;
