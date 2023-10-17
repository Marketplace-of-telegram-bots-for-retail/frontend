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
    collecSearch(state, actions) {
      state.search = actions.payload;
    },
    collectCategories(state, actions) {
      state.categories = actions.payload;
    },
    collecPrices(state, actions) {
      state.prices = actions.payload;
    },
    collecSorting(state, actions) {
      state.sorting = actions.payload;
    },
  },
});
export const { collecSearch, collectCategories, collecPrices, collecSorting } =
  dataSearchFormSlice.actions;
export default dataSearchFormSlice.reducer;
