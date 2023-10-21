/* eslint-disable prefer-destructuring */
import { createSlice } from '@reduxjs/toolkit';

const dataSearchFormSlice = createSlice({
  name: 'dataSearchForm',
  initialState: {
    search: null,
    categories: [],
    prices: [0, 0],
    sorting: null,
  },
  reducers: {
    collecSearch(state, action) {
      state.search = action.payload;
    },
    collectCategories(state, action) {
      state.categories = action.payload;
    },
    collecPrices(state, action) {
      state.prices = action.payload;
    },
    collecSorting(state, action) {
      state.sorting = action.payload;
    },
  },
});
export const { collecSearch, collectCategories, collecPrices, collecSorting } =
  dataSearchFormSlice.actions;
export default dataSearchFormSlice.reducer;
