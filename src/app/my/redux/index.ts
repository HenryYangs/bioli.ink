import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { mySlice } from './my';

const rootReducer = combineReducers({
  my: mySlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type RootState = ReturnType<typeof rootReducer>;
