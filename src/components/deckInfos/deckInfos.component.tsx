import React from 'react';

import FlexContainer from '../flexContainer/flexContainer.component';

import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CheckIcon from '@mui/icons-material/Check';
import BlurLayer from '../blurLayer/blurLayer.component';

type DeckInfosProps = {
  title: string;
  amountOfCards: number;
  timeSpent: number;
  successPercentage: number;
  onClick: () => void;
};

const DeckInfos = ({
  title,
  amountOfCards,
  timeSpent,
  onClick,
  successPercentage,
}: DeckInfosProps) => {
  return (
    <button
      onClick={onClick}
      className='w-full bg-slate-300'
      style={{
        height: '100px',
        textAlign: 'left',
        borderBottom: '1px solid grey',
      }}
    >
      <BlurLayer width='100%' height='100%'>
        <p style={{ width: '300px' }} className='flex text-xl font-bold'>
          {title}
        </p>
        <FlexContainer width='250px' justify='between' height='30px'>
          <p>
            <FolderOpenIcon /> {amountOfCards}
          </p>
          <p>
            <QueryBuilderIcon /> {timeSpent}mins
          </p>
          <p>
            <CheckIcon /> {successPercentage}%
          </p>
        </FlexContainer>
      </BlurLayer>
    </button>
  );
};

export default DeckInfos;
