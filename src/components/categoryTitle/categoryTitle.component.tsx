import React from 'react';
import { useNavigate } from 'react-router-dom';

import FlexContainer from '../flexContainer/flexContainer.component';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AddIcon from '@mui/icons-material/Add';

import BlurLayer from '../blurLayer/blurLayer.component';
import ButtonIcon from '../buttonIcon/buttonIcon.component';

type CategoryTitleProps = {
  title: string;
};

const CategoryTitle = ({ title }: CategoryTitleProps) => {
  let navigate = useNavigate();
  return (
    <FlexContainer height='50px'>
      <BlurLayer
        className='justify-between px-10 bg-slate-100'
        height='50px'
        width='100%'
      >
        <ButtonIcon
          onClick={() => navigate(-1)}
          icon={<ArrowBackIosNewIcon />}
        />

        <h1>{title}</h1>
        <ButtonIcon onClick={() => navigate('/new')} icon={<AddIcon />} />
      </BlurLayer>
    </FlexContainer>
  );
};

export default CategoryTitle;
