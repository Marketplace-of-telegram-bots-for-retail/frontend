/* eslint-disable no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../utils/Api';

// Получить данные карточки товара
export const getProductCard = createAsyncThunk(
  'productCardData/getProductCard',
  async (dataId, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.getProductId(dataId);
      // console.log(res);
      dispatch(setProductCardState(res));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Загрузить отзывы на товар
export const getProductsReviews = createAsyncThunk(
  'productCardData/getProductCard',
  async (dataId, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.getProductsReviews(dataId);
      // console.log(res);
      dispatch(setProductReviewsState(res));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const setError = (state, action) => {
  // console.log(action);
  const errMessage = action.payload.detail || action.payload.message;
  console.log(errMessage);
  state.statu = 'rejected';
  state.error = errMessage;
};
const SetPending = (state) => {
  state.status = 'loading';
  state.is_loading = true;
  state.error = null;
};
const setFulfilled = (state) => {
  state.is_loading = false;
};

const productCardDataSlice = createSlice({
  name: 'productCardData',
  initialState: {
    productCard: {},
    productReviews: [],
    isShowProductImagesPopup: false,
    status: null,
    error: null,
    is_loading: false,
  },
  reducers: {
    setProductCardState(state, action) {
      // console.log('setProductCardState => state', state);
      // console.log('setProductCardState => action', action);
      state.productCard = action.payload;
      // сбросить стейт попапа
      state.isShowProductImagesPopup = false;
    },
    setProductReviewsState(state, action) {
      console.log('setProductCardState => state', state);
      console.log('setProductCardState => action', action);
      state.productReviews = action.payload;
    },
    setShowProductImagesPopup(state, action) {
      state.isShowProductImagesPopup = action.payload;
    },
  },
  extraReducers: {
    [getProductCard.pending]: SetPending,
    [getProductCard.fulfilled]: setFulfilled,
    [getProductCard.rejected]: setError,
  },
});

export const {
  setProductCardState,
  setProductReviewsState,
  setShowProductImagesPopup,
} = productCardDataSlice.actions;
export default productCardDataSlice.reducer;
