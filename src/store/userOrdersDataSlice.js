/* eslint-disable no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../utils/Api';

const initialState = {
  allOrders: [],
  paidOrders: [],
  unpaidOrders: [],
  currentOrder: {},
  newOrder: {},
  status: null,
  error: null,
  is_loading: false,
};

// обработчик загрузки карточек
export const getOrdersList = createAsyncThunk(
  'userOrdersData/getOrdersList',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.getOrders();
      // потом убрать
      console.log('getOrdersList => api.getOrders(data)=> res', res);
      dispatch(setAllOrders(res));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// получить заказ по ID
export const getOrder = createAsyncThunk(
  'userOrdersData/getOrder',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.getOrdersId(id);
      // потом убрать
      console.log('getOrder, id', id);
      console.log('getOrder => api.getOrder(data)=> res', res);
      dispatch(setCurrentOrder(res));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// получить заказ по ID
// {
//   "pay_method": "sbp"
//   "send_to": "email" - если мы его меняем.
// }
export const postOrder = createAsyncThunk(
  'userOrdersData/postOrder',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.postOrders(data);
      // потом убрать
      console.log('postOrder => api.postOrder(data)=> res', res);
      dispatch(setNewOrder(res));
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  'userOrdersData/deleteOrder',
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.postOrders(id);
      // потом убрать
      console.log('deleteOrder => api.deleteOrder(id)=> id, res', id, res);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const payOrdersId = createAsyncThunk(
  'userOrdersData/payOrdersId',
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.payOrdersId(id);
      // потом убрать
      console.log('payOrdersId => api.payOrdersId(id)=> id, res', id, res);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const placeAndPayOrder = createAsyncThunk(
  'userOrdersData/placeAndPayOrder',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.postOrders(data);
      // потом убрать
      console.log('placeAndPayOrder => api.postOrders(data)=> res', res);
      dispatch(setCurrentOrder(res));
      const { id } = res;
      const pay = await api.payOrdersId(id);
      console.log(
        'placeAndPayOrder => api.postOrders(data) => res =>  api.payOrdersId(id) => pay',
        pay
      );
      dispatch(setCurrentOrder(pay));
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
};
const SetPending = (state) => {
  // console.log(state, action);
  state.status = 'loading';
  state.is_loading = true;
  state.error = null;
};
const setFulfilled = (state) => {
  state.is_loading = false;
};

const userOrdersDataSlice = createSlice({
  name: 'userOrdersData',
  initialState,
  reducers: {
    setAllOrders(state, action) {
      state.allOrders = action.payload;
    },
    setCurrentOrder(state, action) {
      state.currentOrder = action.payload;
    },
    setNewOrder(state, action) {
      state.newOrder = action.payload;
    },

    // пока не используются
    setPaidOrders(state, action) {
      state.paidOrders = action.payload;
    },
    setUnpaidOrders(state, action) {
      state.unpaidOrders = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrdersList.pending, SetPending)
      .addCase(getOrdersList.fulfilled, setFulfilled)
      .addCase(getOrdersList.rejected, setError)

      .addCase(getOrder.pending, SetPending)
      .addCase(getOrder.fulfilled, setFulfilled)
      .addCase(getOrder.rejected, setError)

      .addCase(postOrder.pending, SetPending)
      .addCase(postOrder.fulfilled, setFulfilled)
      .addCase(postOrder.rejected, setError);
  },
});

export const { setAllOrders, setCurrentOrder, setNewOrder } =
  userOrdersDataSlice.actions;
export default userOrdersDataSlice.reducer;
