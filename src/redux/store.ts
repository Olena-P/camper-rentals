import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filters/slice';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
  },
});
