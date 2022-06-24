import React from 'react';

import ButtonIconAndText from '../buttonIconAndText/buttonIconAndText.component';
import FlexContainer from '../flexContainer/flexContainer.component';

import folderIcon from '../../assets/icons/folderIcon.png';
import { useAppDispatch } from '../../redux/hooks';
import { setActiveFolder } from '../../redux/foldersNav/foldersNavSlice';

const Sidebar = ({ folders }: any) => {
  const dispatch = useAppDispatch();

  return (
    <FlexContainer
      className='sidebar h-full bg-slate-300 opacity-80'
      flex='col'
      width='20%'
      height='100%'
      justify='start'
    >
      {folders.map((folder: any) => (
        <ButtonIconAndText
          onClick={() => dispatch(setActiveFolder(folder.toLowerCase()))}
          key={folder}
          text={folder.toUpperCase()}
          icon={<img src={folderIcon} alt='My Decks icons' width='35px' />}
          className='my-10 flex flex-row w-1/2 justify-evenly items-center'
          textClassName='text-xl'
        />
      ))}
    </FlexContainer>
  );
};

export default Sidebar;
