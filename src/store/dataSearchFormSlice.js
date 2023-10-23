/* eslint-disable prefer-destructuring */
import { createSlice } from '@reduxjs/toolkit';
import { PRICE_LIMIT } from '../utils/constants';

const dataSearchFormSlice = createSlice({
  name: 'dataSearchForm',
  initialState: {
    search: null,
    categories: { 1: false, 2: false, 3: false, 4: false },
    prices: [PRICE_LIMIT.min, PRICE_LIMIT.max],
    sorting: null,
  },
  reducers: {
    collecSearch(state, action) {
      state.search = action.payload;
    },
    collectCategories(state, action) {
      console.log(action.payload);
      // state.categories = action.payload;
      const newState = action.payload;
      const { categories } = state;
      state.categories = { ...categories, ...newState };
    },
    collecPrices(state, action) {
      state.prices = action.payload;
    },
    collecSorting(state, action) {
      state.sorting = action.payload;
    },
    ressetFiltersState(state) {
      state.prices = [PRICE_LIMIT.min, PRICE_LIMIT.max];
      state.categories = { 1: false, 2: false, 3: false, 4: false };
    },
  },
});
export const {
  collecSearch,
  collectCategories,
  collecPrices,
  collecSorting,
  ressetFiltersState,
} = dataSearchFormSlice.actions;
export default dataSearchFormSlice.reducer;
