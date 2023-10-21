/* eslint-disable no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../utils/Api';

// обработчик загрузки карточек
export const getProducts = createAsyncThunk(
  'dataProductsState/getProducts',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const data = await api.getProducts(params);
      dispatch(changeProductsAllStates(data));
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
// обработчик подгрузки карточек
export const getMoreProducts = createAsyncThunk(
  'dataProductsState/getMoreProducts',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const data = await api.getProducts(params);
      dispatch(changeMoreProducts(data));
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
// обработчик загрузки избранных
export const getFavorites = createAsyncThunk(
  'dataProductsState/getFavorites',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await api.getProducts('?is_favorited=True');
      dispatch(changeFavoritesAllStates(data));
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
// обработчик подгрузки избранных
export const getMoreFavorites = createAsyncThunk(
  'dataProductsState/getMoreFavorites',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const data = await api.getProducts(params);
      dispatch(changeMoreFavorites(data));
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
// обработчик лайков и дизлайков
export const onLike = createAsyncThunk(
  'dataProductsState/onLike',
  async (card, { rejectWithValue, dispatch }) => {
    const isLiked = card.is_favorited;
    try {
      if (!isLiked) {
        // Добавляем карточку
        await api.postProductFavorite(card.id);
        dispatch(getFavorites());
      } else {
        // Удаляем карточку
        await api.deleteProductFavorite(card.id);
        dispatch(deleteLikeInFavorites(card.id));
      }
      dispatch(toggleLike(card.id));
    } catch (err) {
      console.log('cbCardLike => err', err); // Консоль
      rejectWithValue(err);
    }
  }
);

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
    favoritesCount: 0,
    favoritesNext: null,
    favoritesPrevious: null,
    favoritesResults: [],
    status: null,
    error: null,
    is_loading: false,
  },
  reducers: {
    toggleLike(state, actions) {
      // const productCard = state.results.find(
      //   (card) => card.id === actions.payload
      // );
      // productCard.is_favorited = !productCard.is_favorited;

      state.results = state.results.map((c) => {
        return c.id === actions.payload
          ? { ...c, is_favorited: !c.is_favorited }
          : c;
      });
    },
    deleteLikeInFavorites(state, actions) {
      state.favoritesResults = state.favoritesResults.filter(
        (card) => card.id !== actions.payload
      );
      state.favoritesCount -= 1;
    },

    changeProductsResults(state, actions) {
      state.results = actions.payload;
    },
    changeProductsAllStates(state, actions) {
      state.count = actions.payload.count;
      state.next = actions.payload.next;
      state.previous = actions.payload.previous;
      state.results = actions.payload.results;
    },
    changeMoreProducts(state, actions) {
      state.count = actions.payload.count;
      state.next = actions.payload.next;
      state.previous = actions.payload.previous;
      state.results.push(...actions.payload.results);
    },
    changeFavoritesResults(state, actions) {
      state.favoritesResults = actions.payload;
    },
    changeFavoritesAllStates(state, actions) {
      state.favoritesCount = actions.payload.count;
      state.favoritesNext = actions.payload.next;
      state.favoritesPrevious = actions.payload.previous;
      state.favoritesResults = actions.payload.results;
    },
    changeMoreFavorites(state, actions) {
      state.favoritesCount = actions.payload.count;
      state.favoritesNext = actions.payload.next;
      state.favoritesPrevious = actions.payload.previous;
      state.favoritesResults.push(...actions.payload.results);
    },
    cleanLike(state) {
      state.favoritesCount = 0;
      state.favoritesNext = null;
      state.favoritesPrevious = null;
      state.favoritesResults = [];
    },
  },
  extraReducers: {
    [getProducts.pending]: SetPending,
    [getProducts.fulfilled]: setFulfilled,
    [getProducts.rejected]: setError,

    [getMoreProducts.pending]: SetPending,
    [getMoreProducts.fulfilled]: setFulfilled,
    [getMoreProducts.rejected]: setError,

    [getFavorites.pending]: SetPending,
    [getFavorites.fulfilled]: setFulfilled,
    [getFavorites.rejected]: setError,

    [getMoreFavorites.pending]: SetPending,
    [getMoreFavorites.fulfilled]: setFulfilled,
    [getMoreFavorites.rejected]: setError,
  },
});

export const {
  toggleLike,
  deleteLikeInFavorites,
  changeProductsResults,
  changeProductsAllStates,
  changeMoreProducts,
  changeFavoritesResults,
  changeFavoritesAllStates,
  changeMoreFavorites,
  cleanLike,
} = dataProductsStateSlice.actions;
export default dataProductsStateSlice.reducer;
