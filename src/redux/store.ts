import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user/userSlice';
import foldersNavReducer from './foldersNav/foldersNavSlice';
import deckStatisticsReducer from './deckStatistics/deckStatisticsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    foldersNav: foldersNavReducer,
    deckStatistics: deckStatisticsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
