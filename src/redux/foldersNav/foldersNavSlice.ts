import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FoldersNavStateType } from './foldersNavTypes';

const initialState: FoldersNavStateType = {
  activeFolder: '',
  activeSubFolder: '',
};

export const foldersNavSlice = createSlice({
  name: 'foldersNav',
  initialState,
  reducers: {
    setActiveFolder: (state, action: PayloadAction<string>) => {
      state.activeFolder = action.payload;
    },
    setActiveSubFolder: (state, action: PayloadAction<string>) => {
      state.activeSubFolder = action.payload;
    },
  },
});

export const { setActiveFolder, setActiveSubFolder } = foldersNavSlice.actions;
export default foldersNavSlice.reducer;
