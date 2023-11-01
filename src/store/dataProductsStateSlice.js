/* eslint-disable no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../utils/Api';

// обработчик загрузки карточек
export const getProducts = createAsyncThunk(
  'dataProductsState/getProducts',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const data = await api.getProducts(params);
      dispatch(setProductsState(data));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// обработчик подгрузки карточек
export const getMoreProducts = createAsyncThunk(
  'dataProductsState/getMoreProducts',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const data = await api.getProducts(params);
      dispatch(setMoreProducts(data));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// обработчик загрузки избранных
export const getFavorites = createAsyncThunk(
  'dataProductsState/getFavorites',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await api.getProducts('?is_favorited=True');
      dispatch(setFavoritesAllStates(data));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// обработчик подгрузки избранных
export const getMoreFavorites = createAsyncThunk(
  'dataProductsState/getMoreFavorites',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const data = await api.getProducts(params);
      dispatch(setMoreFavorites(data));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// обработчик лайков и дизлайков
export const onLike = createAsyncThunk(
  'dataProductsState/onLike',
  async (card, { rejectWithValue, dispatch }) => {
    let isLiked = card.is_favorited;
    try {
      if (!isLiked) {
        // Добавляем карточку
        await api.postProductFavorite(card.id);
        dispatch(getFavorites());
        isLiked = true;
      } else {
        // Удаляем карточку
        await api.deleteProductFavorite(card.id);
        dispatch(deleteLikeInFavorites(card.id));
        isLiked = false;
      }
      dispatch(toggleLike(card.id));
      return isLiked;
    } catch (err) {
      console.log('cbCardLike => err', err); // Консоль
      return rejectWithValue(err);
    }
  }
);

const setError = (state, action) => {
  const errMessage =
    action.payload?.detail || action.payload?.message || action?.payload;
  console.log(errMessage);
  state.status = 'rejected';
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

const dataProductsStateSlice = createSlice({
  name: 'dataProductsState',
  initialState: {
    count: 0,
    next: null,
    previous: null,
    results: [],
    favoritesCount: 0,
    favoritesNext: null,
    favoritesPrevious: null,
    favoritesResults: [],
    status: null,
    error: null,
    is_loading: false,
  },
  reducers: {
    toggleLike(state, action) {
      // const productCard = state.results.find(
      //   (card) => card.id === action.payload
      // );
      // productCard.is_favorited = !productCard.is_favorited;
      state.results = state.results.map((c) => {
        return c.id === action.payload
          ? { ...c, is_favorited: !c.is_favorited }
          : c;
      });
    },
    deleteLikeInFavorites(state, action) {
      state.favoritesResults = state.favoritesResults.filter(
        (card) => card.id !== action.payload
      );
      state.favoritesCount -= 1;
    },
    setProductsState(state, action) {
      const { count, next, previous, results } = action.payload;
      state.count = count;
      state.next = next;
      state.previous = previous;
      state.results = results;
    },
    setMoreProducts(state, action) {
      const { count, next, previous, results } = action.payload;
      state.count = count;
      state.next = next;
      state.previous = previous;

      // state.results.push(...results);
      // защита от дубля карточек
      const nextPagesResult = results.filter(
        (item) => !state.results.some((element) => element.id === item.id)
      );
      console.log('// защита от дубля карточек', nextPagesResult);
      // state.results.push(...nextPagesResult);
      state.results = state.results.concat(nextPagesResult);
    },
    setFavoritesAllStates(state, action) {
      const { count, next, previous, results } = action.payload;
      state.favoritesCount = count;
      state.favoritesNext = next;
      state.favoritesPrevious = previous;
      state.favoritesResults = results;
    },
    setMoreFavorites(state, action) {
      const { count, next, previous, results } = action.payload;
      state.favoritesCount = count;
      state.favoritesNext = next;
      state.favoritesPrevious = previous;

      // state.favoritesResults.push(...results);
      // защита от дубля карточек
      const nextPagesResult = results.filter(
        (item) =>
          !state.favoritesResults.some((element) => element.id === item.id)
      );
      console.log('// защита от дубля карточек', nextPagesResult);
      state.favoritesResults.push(...nextPagesResult);
    },
    cleanLike(state) {
      state.favoritesCount = 0;
      state.favoritesNext = null;
      state.favoritesPrevious = null;
      state.favoritesResults = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, SetPending)
      .addCase(getProducts.fulfilled, setFulfilled)
      .addCase(getProducts.rejected, setError)

      .addCase(getMoreProducts.pending, SetPending)
      .addCase(getMoreProducts.fulfilled, setFulfilled)
      .addCase(getMoreProducts.rejected, setError)

      .addCase(getFavorites.pending, SetPending)
      .addCase(getFavorites.fulfilled, setFulfilled)
      .addCase(getFavorites.rejected, setError)

      .addCase(getMoreFavorites.pending, SetPending)
      .addCase(getMoreFavorites.fulfilled, setFulfilled)
      .addCase(getMoreFavorites.rejected, setError);
  },
});

export const {
  toggleLike,
  deleteLikeInFavorites,
  setProductsState,
  setMoreProducts,
  setFavoritesAllStates,
  setMoreFavorites,
  cleanLike,
} = dataProductsStateSlice.actions;
export default dataProductsStateSlice.reducer;
