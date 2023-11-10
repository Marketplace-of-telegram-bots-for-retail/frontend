import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../utils/Api';

const initialState = {
  seller: [],
  status: null,
  error: null,
  is_loading: false,
};

// стать продавцом
export const postBecomeSeller = createAsyncThunk(
  'seller/postBecomeSell er',
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.postBecomeSeller(data);
      // потом убрать
      console.log('postBecomeSeller, res', res);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// добавить товар
export const postProduct = createAsyncThunk(
  'seller/postProduct',
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.postProduct(data);
      // потом убрать
      console.log('postProduct, data, res', data, res);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const setError = (state, action) => {
  if (action.payload.detail) {
    state.error = action.payload.detail;
  }
  const { statusText, status } = action.payload;
  state.status = action.error.message;
  state.resStatusText = statusText;
  state.resStatus = status;
};
const SetPending = (state) => {
  state.status = 'loading';
  state.is_loading = true;
  state.error = null;
};
const setFulfilled = (state) => {
  state.is_loading = false;
  state.resStatusText = null;
  state.resStatus = null;
};

const sellerSlice = createSlice({
  name: 'seller',
  initialState,
  reducers: {
    setSellerData(state, action) {
      state.seller = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postBecomeSeller.pending, SetPending)
      .addCase(postBecomeSeller.fulfilled, setFulfilled)
      .addCase(postBecomeSeller.rejected, setError);

    builder
      .addCase(postProduct.pending, SetPending)
      .addCase(postProduct.fulfilled, setFulfilled)
      .addCase(postProduct.rejected, setError);
  },
});

export const { setSellerData } = sellerSlice.actions;
export default sellerSlice.reducer;
