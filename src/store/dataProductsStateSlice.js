/* eslint-disable prefer-destructuring */
import { createSlice } from '@reduxjs/toolkit';

const dataProductsStateSlice = createSlice({
  name: 'dataProductsState',
  initialState: {
    pageProductsCount: 0,
    pageProductsNext: null,
    pageProductsPrevious: null,
    pageProductsResults: [],
  },
  reducers: {
    collecProductsCount(state, actions) {
      state.pageProductsCount = actions.payload;
    },
    collecProductsNext(state, actions) {
      state.pageProductsNext = actions.payload;
    },
    collecProductsPrevious(state, actions) {
      state.pageProductsPrevious = actions.payload;
    },
    collecProductsResults(state, actions) {
      state.pageProductsResults = actions.payload;
    },
    collecProductsAllStates(state, actions) {
      state.pageProductsCount = actions.payload.count;
      state.pageProductsNext = actions.payload.next;
      state.pageProductsPrevious = actions.payload.previous;
      state.pageProductsResults = actions.payload.results;
    },
  },
});
export const {
  collecProductsCount,
  collecProductsNext,
  collecProductsPrevious,
  collecProductsResults,
  collecProductsAllStates,
} = dataProductsStateSlice.actions;
export default dataProductsStateSlice.reducer;
