/* eslint-disable no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../utils/Api';

// обработчик загрузки карточек
export const getOrdersList = createAsyncThunk(
  'userOrdersData/getOrdersList',
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
  'userOrdersData/addProductCart',
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

const userOrdersDataSlice = createSlice({
  name: 'userOrdersData',
  initialState: {
    cart_id: null,
    total_cost: null,
    total_amount: null,
    discount_amount: null,
    discount: null,
    items: [],
    status: null,
    error: null,
    is_loading: false,
    currentCardId: null,
    total_quantity: null,
  },
  reducers: {
    setCardIdIsLoading(state, action) {
      state.currentCardId = action.payload;
    },
    userOrdersData(state, action) {
      state.cart_id = action.payload[0]?.id || null;
      state.total_cost = action.payload[0]?.total_cost || 0;
      state.total_amount = action.payload[0]?.total_amount || 0;
      state.total_quantity = action.payload[0]?.total_quantity || 0;
      state.discount_amount = action.payload[0]?.discount_amount || null;
      state.discount = action.payload[0]?.discount || null;
      state.items = action.payload[0]?.items || [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, SetPending)
      .addCase(getCart.fulfilled, setFulfilled)
      .addCase(getCart.rejected, setError)

      .addCase(addProductCart.pending, SetPending)
      .addCase(addProductCart.rejected, setError)
      .addCase(addProductCart.fulfilled, setFulfilled);
  },
});

export const { setCartsState, editCartsState, clearCarts, setCardIdIsLoading } =
  userOrdersDataSlice.actions;
export default userOrdersDataSlice.reducer;
