/* eslint-disable prefer-destructuring */
import { createSlice } from '@reduxjs/toolkit';

const dataFavoritesStateSlice = createSlice({
  name: 'dataFavoritesState',
  initialState: {
    pageFavoritesCount: 0,
    pageFavoritesNext: null,
    pageFavoritesPrevious: null,
    pageFavoritesResults: [],
  },
  reducers: {
    collecFavoritesCount(state, actions) {
      state.pageFavoritesCount = actions.payload;
    },
    collecFavoritesNext(state, actions) {
      state.pageFavoritesNext = actions.payload;
    },
    collecFavoritesPrevious(state, actions) {
      state.pageFavoritesPrevious = actions.payload;
    },
    collecFavoritesResults(state, actions) {
      state.pageFavoritesResults = actions.payload;
    },
    collecFavoritesAllStates(state, actions) {
      state.pageFavoritesCount = actions.payload.count;
      state.pageFavoritesNext = actions.payload.next;
      state.pageFavoritesPrevious = actions.payload.previous;
      state.pageFavoritesResults = actions.payload.results;
    },
  },
});
export const {
  collecFavoritesCount,
  collecFavoritesNext,
  collecFavoritesPrevious,
  collecFavoritesResults,
  collecFavoritesAllStates,
} = dataFavoritesStateSlice.actions;
export default dataFavoritesStateSlice.reducer;
