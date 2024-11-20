import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MyStore {
  avatar: string;
  username: string;
  bio: string;
}

const initialState: MyStore = {
  avatar: '',
  username: '',
  bio: '',
}

export const mySlice = createSlice({
  name: 'my',
  initialState,
  reducers: {
    updateAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
    updateUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    updateBio: (state, action: PayloadAction<string>) => {
      state.bio = action.payload;
    },
  },
});

export default mySlice.reducer;
export const {
  updateAvatar,
  updateUsername,
  updateBio,
} = mySlice.actions;
