/* eslint-disable no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../utils/Api';

// обработчик загрузки карточек
export const getCart = createAsyncThunk(
  'dataCart/getCart',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await api.getCart();
      // console.log(data);
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
    dispatch(setCardIdIsLoading(id));
    try {
      const data = await api.postProductCart(id);
      // console.log(data);
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
    dispatch(setCardIdIsLoading(id));
    try {
      const data = await api.deleteProductCart(id);
      // console.log(data);
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
    dispatch(setCardIdIsLoading(id));
    try {
      const data = await api.reduceProductCart(id);
      // console.log(data);
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
    dispatch(setCardIdIsLoading(id));
    try {
      const data = await api.selectProductCart(id);
      // console.log(data);
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
      dispatch(editCartsState(data));
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
        dispatch(clearCarts());
      } else {
        // console.log(data);
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
      // console.log(res);
      dispatch(editCartsState(res));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const setError = (state, action) => {
  // console.log(action);
  const errMessage =
    action.payload?.detail || action.payload?.message || action?.payload;
  console.log(errMessage);
  state.status = 'rejected';
  state.error = errMessage;
  state.currentCardId = null;
};
const SetPending = (state) => {
  // console.log(state, action);
  state.status = 'loading';
  state.is_loading = true;
  state.error = null;
};
const setFulfilled = (state) => {
  state.is_loading = false;
  state.currentCardId = null;
};

const dataCartSlice = createSlice({
  name: 'dataCart',
  initialState: {
    cart_id: null,
    total_cost: null,
    total_amount: null,
    discount_amount: null,
    discount: null,
    total_quantity: null,
    items: [],
    itemsForOrder: [],
    status: null,
    error: null,
    is_loading: false,
    currentCardId: null,
  },
  reducers: {
    setCardIdIsLoading(state, action) {
      state.currentCardId = action.payload;
    },
    setCartsState(state, action) {
      state.cart_id = action.payload[0]?.id || null;
      state.total_cost = action.payload[0]?.total_cost || 0;
      state.total_amount = action.payload[0]?.total_amount || 0;
      state.total_quantity = action.payload[0]?.total_quantity || 0;
      state.discount_amount = action.payload[0]?.discount_amount || null;
      state.discount = action.payload[0]?.discount || null;
      state.items = action.payload[0]?.items || [];
      state.itemsForOrder = action.payload[0]?.items.filter(
        (item) => item.is_selected === true
      );
    },
    editCartsState(state, action) {
      const {
        id,
        total_cost,
        total_amount,
        total_quantity,
        discount_amount,
        discount,
        items,
      } = action.payload;
      state.cart_id = id || null;
      state.total_cost = total_cost || 0;
      state.total_amount = total_amount || 0;
      state.total_quantity = total_quantity || 0;
      state.discount_amount = discount_amount || null;
      state.discount = discount || null;
      state.items = items || [];
      state.itemsForOrder = items.filter((item) => item.is_selected === true);
    },
    clearCarts(state) {
      state.cart_id = null;
      state.total_cost = null;
      state.total_amount = null;
      state.discount_amount = null;
      state.discount = null;
      state.items = [];
      state.total_quantity = null;
      state.itemsForOrder = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, SetPending)
      .addCase(getCart.fulfilled, setFulfilled)
      .addCase(getCart.rejected, setError)

      .addCase(addProductCart.pending, SetPending)
      .addCase(addProductCart.rejected, setError)
      .addCase(addProductCart.fulfilled, setFulfilled)

      .addCase(deleteProductCart.pending, SetPending)
      .addCase(deleteProductCart.fulfilled, setFulfilled)
      .addCase(deleteProductCart.rejected, setError)

      .addCase(reduceProductCart.pending, SetPending)
      .addCase(reduceProductCart.fulfilled, setFulfilled)
      .addCase(reduceProductCart.rejected, setError)

      .addCase(selectProductCart.pending, SetPending)
      .addCase(selectProductCart.fulfilled, setFulfilled)
      .addCase(selectProductCart.rejected, setError)

      .addCase(selectAllProductsCart.pending, SetPending)
      .addCase(selectAllProductsCart.fulfilled, setFulfilled)
      .addCase(selectAllProductsCart.rejected, setError)

      .addCase(unselectAllProductsCart.pending, SetPending)
      .addCase(unselectAllProductsCart.fulfilled, setFulfilled)
      .addCase(unselectAllProductsCart.rejected, setError)

      .addCase(deleteSelectedProductsCart.pending, SetPending)
      .addCase(deleteSelectedProductsCart.fulfilled, setFulfilled)
      .addCase(deleteSelectedProductsCart.rejected, setError)

      .addCase(addPromocodeCart.pending, SetPending)
      .addCase(addPromocodeCart.fulfilled, setFulfilled)
      .addCase(addPromocodeCart.rejected, setError);
  },
});

export const { setCartsState, editCartsState, clearCarts, setCardIdIsLoading } =
  dataCartSlice.actions;
export default dataCartSlice.reducer;
