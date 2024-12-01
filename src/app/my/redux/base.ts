import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BaseStore {
  uniqueId: string;
}

const initialState: BaseStore = {
  uniqueId: '',
};

export const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    updateUniqueId: (state, action: PayloadAction<string>) => {
      state.uniqueId = action.payload;
    }
  }
});

export default baseSlice.reducer;
export const {
  updateUniqueId,
} = baseSlice.actions;
