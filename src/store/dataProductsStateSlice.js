/* eslint-disable no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../utils/Api';

export const getProducts = createAsyncThunk(
  'dataProductsState/getProducts',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const data = await api.getProducts(params);
      console.log(data);
      dispatch(collecProductsAllStates(data));
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
export const getMoreProducts = createAsyncThunk(
  'dataProductsState/getMoreProducts',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const data = await api.getProducts(params);
      dispatch(collecMoreProducts(data));
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
// export const getSearchProducts = createAsyncThunk(
//   'dataProductsState/getSearchProducts',
//   async (params, { rejectWithValue, dispatch }) => {
//     try {
//       const data = await api.getProducts(params);
//       console.log(
//         'getSearchProducts => api.getProducts(formRequest) => data',
//         data
//       );
//       dispatch(collecProductsAllStates(data));
//     } catch (err) {
//       rejectWithValue(err);
//     }
//   }
// );

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};
const SetPending = (state) => {
  state.status = 'loading';
  state.is_loading = true;
  state.error = null;
};
const setFulfilled = (state) => {
  state.is_loading = false;
};

const dataProductsStateSlice = createSlice({
  name: 'dataProductsState',
  initialState: {
    count: 0,
    next: null,
    previous: null,
    results: [],
    status: null,
    error: null,
    is_loading: false,
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
      state.count = actions.payload.count;
      state.next = actions.payload.next;
      state.previous = actions.payload.previous;
      state.results = actions.payload.results;
    },
    collecMoreProducts(state, actions) {
      state.count = actions.payload.count;
      state.next = actions.payload.next;
      state.previous = actions.payload.previous;
      state.results.push(...actions.payload.results);
    },
  },
  extraReducers: {
    [getProducts.pending]: SetPending,
    [getProducts.fulfilled]: setFulfilled,
    [getProducts.rejected]: setError,

    [getMoreProducts.pending]: SetPending,
    [getMoreProducts.fulfilled]: setFulfilled,
    [getMoreProducts.rejected]: setError,

    // [getSearchProducts.pending]: SetPending,
    // [getSearchProducts.fulfilled]: setFulfilled,
    // [getSearchProducts.rejected]: setError,
  },
});

export const {
  collecProductsCount,
  collecProductsNext,
  collecProductsPrevious,
  collecProductsResults,
  collecProductsAllStates,
  collecMoreProducts,
} = dataProductsStateSlice.actions;
export default dataProductsStateSlice.reducer;
