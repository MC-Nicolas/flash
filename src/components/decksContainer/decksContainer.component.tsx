import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useFolders } from '../../hooks/folders/folders.hooks';
import { setActiveSubFolder } from '../../redux/foldersNav/foldersNavSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  convertObjToArr,
  removeSpecialCharacters,
} from '../../utils/formatting';

import DeckInfos from '../deckInfos/deckInfos.component';
import FlexContainer from '../flexContainer/flexContainer.component';

const DecksContainer = ({ activeFolder }: any) => {
  let navigate = useNavigate();
  const { folders } = useAppSelector((state) => state.user);
  const { subFolders } = useFolders(folders, activeFolder);
  const dispatch = useAppDispatch();

  const convertedSubFolders = convertObjToArr(subFolders);

  return (
    <FlexContainer flex='col' justify='start'>
      {subFolders
        ? convertedSubFolders.map(
            ({
              title,
              timeSpent,
              successPercentage,
              flashcards,
            }: {
              title: string;
              timeSpent: number;
              successPercentage: number;
              flashcards: { front: string; back: string }[];
            }) => (
              <DeckInfos
                onClick={() => {
                  navigate(`/flashcards/${removeSpecialCharacters(title)}`);
                  dispatch(
                    setActiveSubFolder(
                      removeSpecialCharacters(title.toLowerCase())
                    )
                  );
                }}
                key={title}
                title={title}
                amountOfCards={flashcards.length}
                timeSpent={timeSpent}
                successPercentage={successPercentage}
              />
            )
          )
        : null}
    </FlexContainer>
  );
};

export default DecksContainer;
