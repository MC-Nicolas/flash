import React from 'react';
import FlexContainer from '../flexContainer/flexContainer.component';

type AnswersNumbersContainerProps = {
  text: string;
  type: string;
};

const AnswersNumbersContainer = ({
  text,
  type,
}: AnswersNumbersContainerProps) => {
  return (
    <FlexContainer flex='col text-white text-sm border-solid border-r border-slate-400'>
      <p>{text}</p>
      <p>{type}</p>
    </FlexContainer>
  );
};

export default AnswersNumbersContainer;
