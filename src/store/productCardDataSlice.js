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
  'productCardData/getProductsReviews',
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

// Отправить отзывы на товар
export const sendProductReview = createAsyncThunk(
  'productCardData/sendProductReview',
  async ({ id, data }, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.postProductsReview(id, data);
      console.log(res);
      dispatch(setMyProductReview(res));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// Изменить мой отзыв
export const changeProductReview = createAsyncThunk(
  'productCardData/changeProductReview',
  async ({ id, reviewId, data }, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.putProductReviewId(id, reviewId, data);
      console.log(res);
      dispatch(setMyProductReview(res));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// Удалить мой отызыв
export const deleteProductReview = createAsyncThunk(
  'productCardData/deleteProductReview',
  async ({ id, reviewId }, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.deleteProductReview(id, reviewId);
      if (res.status === 204) {
        dispatch(clearCartsState());
      } else {
        dispatch(setMyProductReview(res));
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
const setError = (state, action) => {
  // console.log(action);
  const errMessage =
    action.payload.detail || action.payload.message || action.payload;
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
    productImages: [],
    Images: [],
    productReviews: [],
    myReview: {},
    isShowProductImagesPopup: false,
    isShowDescription: true,
    reviewsDisplay: false,
    status: null,
    error: null,
    is_loading: false,
  },
  reducers: {
    setProductCardState(state, action) {
      state.productCard = action.payload;
      // сбросить стейт попапа
      state.isShowProductImagesPopup = false;
      state.isShowDescription = true;
      // получить массив ссылок на изображение
      const newImages = Object.keys(action.payload)
        // .filter((key) => key.includes('image_') && action.payload[key] !== null)
        // .map((key) => action.payload[key]);
        .filter((key) => key.includes('image_') && action.payload[key] !== null)
        .map((key) => {
          return { [key]: action.payload[key] };
        });
      state.productImages = newImages;
    },
    setProductReviewsState(state, action) {
      state.productReviews = action.payload;
    },
    setShowProductImagesPopup(state, action) {
      state.isShowProductImagesPopup = action.payload;
    },
    setMyProductReview(state, action) {
      state.myReview = action.payload;
    },
    cleanMyProductReview(state) {
      state.myReview = {};
    },
    setReviewsDisplay(state, action) {
      state.reviewsDisplay = action.payload;
    },
    setShowDescription(state, action) {
      state.isShowDescription = action.payload;
    },
  },
  extraReducers: {
    [getProductCard.pending]: SetPending,
    [getProductCard.fulfilled]: setFulfilled,
    [getProductCard.rejected]: setError,

    [getProductsReviews.pending]: SetPending,
    [getProductsReviews.fulfilled]: setFulfilled,
    [getProductsReviews.rejected]: setError,

    [sendProductReview.pending]: SetPending,
    [sendProductReview.fulfilled]: setFulfilled,
    [sendProductReview.rejected]: setError,

    [changeProductReview.pending]: SetPending,
    [changeProductReview.fulfilled]: setFulfilled,
    [changeProductReview.rejected]: setError,

    [deleteProductReview.pending]: SetPending,
    [deleteProductReview.fulfilled]: setFulfilled,
    [deleteProductReview.rejected]: setError,
  },
});

export const {
  setProductCardState,
  setProductReviewsState,
  setShowProductImagesPopup,
  setMyProductReview,
  cleanMyProductReview,
  setShowDescription,
} = productCardDataSlice.actions;
export default productCardDataSlice.reducer;
