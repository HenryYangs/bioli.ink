import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MyStore {
  username: string;
  bio: string;
}

const initialState: MyStore = {
  username: '',
  bio: '',
}

export const mySlice = createSlice({
  name: 'my',
  initialState,
  reducers: {
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
  updateUsername,
  updateBio,
} = mySlice.actions;
