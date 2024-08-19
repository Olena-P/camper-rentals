import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VehicleFilters, initialFilters } from './filterProperties';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFilters,
  reducers: {
    setFilters(state, action: PayloadAction<VehicleFilters>) {
      return { ...state, ...action.payload };
    },
    resetFilters() {
      return initialFilters;
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
