/* eslint-disable no-use-before-define */
import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from './actions';

const initialState = {
  categoriesList: [],
  isLoading: false,
  isSuccess: false,
  status: null,
  errorMessage: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.isLoading = false;
        state.isSuccess = true;
        state.categoriesList = payload;
      })
      .addCase(getCategories.rejected, (state, { payload }) => {
        state.status = 'rejected';
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      });
  },
});

export default categoriesSlice.reducer;
