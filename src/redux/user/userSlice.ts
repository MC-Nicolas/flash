import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserStateType } from './userTypes';

const initialState: UserStateType = {
  email: 'mace_nicolas@icloud.com',
  folders: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setFolders: (state, action: PayloadAction<any>) => {
      state.folders = action.payload;
    },
  },
});

export const { setEmail, setFolders } = userSlice.actions;

export default userSlice.reducer;
