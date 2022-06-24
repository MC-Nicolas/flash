import { Button } from '@mui/material';
import {
  setCorrectAnswers,
  setIncorrectAnswers,
  setTotalAnswers,
} from '../../redux/deckStatistics/deckStatisticsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import FlexContainer from '../flexContainer/flexContainer.component';

interface ButtonsRowProps {
  opacity?: 0 | 1;
  onClick: () => void;
}

const ButtonsRow = ({ opacity = 1, onClick }: ButtonsRowProps) => {
  const dispatch = useAppDispatch();
  const { correctAnswers, incorrectAnswers, totalAnswers } = useAppSelector(
    (state) => state.deckStatistics
  );
  const handleOnButtonsClick = (isSuccess: boolean) => {
    isSuccess
      ? dispatch(setCorrectAnswers(correctAnswers + 1))
      : dispatch(setIncorrectAnswers(incorrectAnswers + 1));

    dispatch(setTotalAnswers(totalAnswers + 1));
    onClick();
  };
  return (
    <FlexContainer
      height='50px'
      width='80%'
      className={`justify-evenly opacity-${opacity * 100} ease-in duration-300`}
    >
      <Button
        onClick={() => handleOnButtonsClick(false)}
        color='error'
        variant='contained'
      >
        Fail
      </Button>

      <Button
        onClick={() => handleOnButtonsClick(true)}
        color='success'
        variant='contained'
        size='large'
      >
        Success
      </Button>
    </FlexContainer>
  );
};

export default ButtonsRow;
