import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DeckStatisticsStateType } from './deckStatisticsTypes';

const initialState: DeckStatisticsStateType = {
  totalAnswers: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
};

export const deckStatisticsSlice = createSlice({
  name: 'deckStatistics',
  initialState,
  reducers: {
    setTotalAnswers: (state, action: PayloadAction<number>) => {
      state.totalAnswers = action.payload;
    },
    setCorrectAnswers: (state, action: PayloadAction<number>) => {
      state.correctAnswers = action.payload;
    },
    setIncorrectAnswers: (state, action: PayloadAction<number>) => {
      state.incorrectAnswers = action.payload;
    },
  },
});

export const { setTotalAnswers, setCorrectAnswers, setIncorrectAnswers } =
  deckStatisticsSlice.actions;

export default deckStatisticsSlice.reducer;
