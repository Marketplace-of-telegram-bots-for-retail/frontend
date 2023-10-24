/* eslint-disable no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../utils/Api';

// обработчик загрузки карточек
export const getCart = createAsyncThunk(
  'dataCart/getCart',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await api.getCart();
      console.log(data);
      dispatch(setCartsState(data));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// обработчик добавления продукта в корзину или увеличения на 1
export const addProductCart = createAsyncThunk(
  'dataCart/addProductCart',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const data = await api.postProductCart(id);
      console.log(data);
      dispatch(editCartsState(data));
    } catch (err) {
      console.log('addProductCart => err', err);
      return rejectWithValue(err);
    }
  }
);
// обработчик удаления продукта из корзины
export const deleteProductCart = createAsyncThunk(
  'dataCart/deleteProductCart',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const data = await api.deleteProductCart(id);
      console.log(data);
      dispatch(editCartsState(data));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// обработчик уменьшения продукта в корзине на 1
export const reduceProductCart = createAsyncThunk(
  'dataCart/reduceProductCart',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const data = await api.reduceProductCart(id);
      console.log(data);
      dispatch(editCartsState(data));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// Изменить состояние товаров в корзине выбран/не выбран
export const selectProductCart = createAsyncThunk(
  'dataCart/selectProductCart',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const data = await api.selectProductCart(id);
      console.log(data);
      dispatch(editCartsState(data));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// Выбор всех товаров в корзине
export const selectAllProductsCart = createAsyncThunk(
  'dataCart/selectAllProductsCart',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await api.selectAllProductsCart();
      console.log(data);
      dispatch(editCartsState(data));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// Снять выделение со всех товаров в корзине
export const unselectAllProductsCart = createAsyncThunk(
  'dataCart/unselectAllProductsCart',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await api.unselectAllProductsCart();
      console.log(data);
      dispatch(editCareditCartsStatetsState(data));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// Удалить все выбраные товары
export const deleteSelectedProductsCart = createAsyncThunk(
  'dataCart/deleteSelectedProductsCart',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await api.deleteSelectedProductsCart();
      if (data.status === 204) {
        dispatch(clearCartsState());
      } else {
        console.log(data);
        dispatch(editCartsState(data));
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// Ввести промокод
export const addPromocodeCart = createAsyncThunk(
  'dataCart/addPromocodeCart',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.addPromocodeCart(data);
      console.log(res);
      dispatch(editCartsState(res));
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

const dataCartSlice = createSlice({
  name: 'dataCart',
  initialState: {
    cart_id: null,
    total_cost: null,
    total_amount: null,
    discount_sum: null,
    items: [],
    status: null,
    error: null,
    is_loading: false,
  },
  reducers: {
    setCartsState(state, action) {
      state.cart_id = action.payload[0]?.id || null;
      state.total_cost = action.payload[0]?.total_cost || 0;
      state.total_amount = action.payload[0]?.total_amount || 0;
      state.discount_sum = action.payload[0]?.discount_sum || null;
      state.items = action.payload[0]?.items || [];
    },
    editCartsState(state, action) {
      state.cart_id = action.payload.id || null;
      state.total_cost = action.payload.total_cost || 0;
      state.total_amount = action.payload.total_amount || 0;
      state.discount_sum = action.payload.discount_sum || null;
      state.items = action.payload.items || [];
    },
    clearCartsState(state) {
      state.cart_id = null;
      state.total_cost = null;
      state.total_amount = null;
      state.discount_sum = null;
      state.items = [];
    },
  },
  extraReducers: {
    [getCart.pending]: SetPending,
    [getCart.fulfilled]: setFulfilled,
    [getCart.rejected]: setError,

    [addProductCart.pending]: SetPending,
    [addProductCart.rejected]: setError,
    [addProductCart.fulfilled]: setFulfilled,

    [deleteProductCart.pending]: SetPending,
    [deleteProductCart.fulfilled]: setFulfilled,
    [deleteProductCart.rejected]: setError,

    [reduceProductCart.pending]: SetPending,
    [reduceProductCart.fulfilled]: setFulfilled,
    [reduceProductCart.rejected]: setError,

    [selectProductCart.pending]: SetPending,
    [selectProductCart.fulfilled]: setFulfilled,
    [selectProductCart.rejected]: setError,

    [selectAllProductsCart.pending]: SetPending,
    [selectAllProductsCart.fulfilled]: setFulfilled,
    [selectAllProductsCart.rejected]: setError,

    [unselectAllProductsCart.pending]: SetPending,
    [unselectAllProductsCart.fulfilled]: setFulfilled,
    [unselectAllProductsCart.rejected]: setError,

    [deleteSelectedProductsCart.pending]: SetPending,
    [deleteSelectedProductsCart.fulfilled]: setFulfilled,
    [deleteSelectedProductsCart.rejected]: setError,

    [addPromocodeCart.pending]: SetPending,
    [addPromocodeCart.fulfilled]: setFulfilled,
    [addPromocodeCart.rejected]: setError,
  },
});

export const { setCartsState, editCartsState, clearCartsState } =
  dataCartSlice.actions;
export default dataCartSlice.reducer;
