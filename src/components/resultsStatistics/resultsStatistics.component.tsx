import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import FlexContainer from '../flexContainer/flexContainer.component';
import AnswersNumbersContainer from './answersNumbersContainer.component';

const ResultStatistic = () => {
  const { correctAnswers, incorrectAnswers, totalAnswers } = useAppSelector(
    (state) => state.deckStatistics
  );
  // get percentage from correctAnswers and totalAnswers
  const percentageSuccess = Math.floor(
    totalAnswers > 0 ? (correctAnswers / totalAnswers) * 100 : 0
  );

  return (
    <FlexContainer
      height='60px'
      width='400px'
      className='bg-zinc-900 rounded-lg mt-4'
    >
      <AnswersNumbersContainer text={`${correctAnswers}`} type='Correct' />
      <AnswersNumbersContainer text={`${incorrectAnswers}`} type='Wrong' />
      <AnswersNumbersContainer text={`${percentageSuccess}%`} type='Success' />
    </FlexContainer>
  );
};

export default ResultStatistic;
