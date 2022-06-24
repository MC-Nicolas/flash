import React, { useState } from 'react';

import FlashCard from '../flashCard/flashCard.component';
import FlexContainer from '../flexContainer/flexContainer.component';
import ResultStatistic from '../resultsStatistics/resultsStatistics.component';
import ButtonsRow from '../buttonsRow/buttonsRow.component';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Button } from '@mui/material';
import { setActiveSubFolder } from '../../redux/foldersNav/foldersNavSlice';

interface FlasCardsType {
  number: number;
  front: string;
  back: string;
}

const FlashCardsContainer = () => {
  const dispatch = useAppDispatch();
  const [flashCardIsRevelead, setFlashCardIsRevelead] = useState(false);
  const [flashCardNumber, setFlashCardNumber] = useState(1);
  const userState = useAppSelector((state) => state.user);
  const { activeFolder, activeSubFolder } = useAppSelector(
    (state) => state.foldersNav
  );
  const folders: any = userState.folders;
  const flashCards: FlasCardsType[] =
    folders[activeFolder][activeSubFolder].flashcards;

  const handleOnNext = () => {
    setFlashCardNumber(flashCardNumber + 1);
  };

  return (
    <>
      <ResultStatistic />
      <FlexContainer flex='col' className='justify-evenly'>
        {flashCardNumber < flashCards.length + 1 ? (
          flashCards.map((flashCard: FlasCardsType) => {
            return (
              <FlashCard
                key={flashCard.number}
                isVisible={flashCardNumber === flashCard.number}
                frontText={flashCard.front}
                backText={flashCard.back}
                revealFlashCard={() => setFlashCardIsRevelead(true)}
              />
            );
          })
        ) : (
          <FlashCard isSuccess={true} isVisible={true} />
        )}
        {flashCardNumber < flashCards.length + 1 ? (
          <ButtonsRow
            opacity={flashCardIsRevelead ? 1 : 0}
            onClick={handleOnNext}
          />
        ) : (
          <Button
            variant='contained'
            onClick={() => dispatch(setActiveSubFolder(''))}
          >
            Return
          </Button>
        )}
      </FlexContainer>
    </>
  );
};

export default FlashCardsContainer;
