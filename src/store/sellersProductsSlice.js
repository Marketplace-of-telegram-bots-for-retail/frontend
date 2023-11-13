/* eslint-disable no-use-before-define */
/* eslint-disable no-debugger */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../utils/Api';

const initialState = {
  goods: [],
  newProduct: [],
  currentProduct: {},
  deletionMessage: null,
  status: null,
  error: null,
  is_loading: false,
  resStatus: null,
  resStatusText: null,
};

// добавить товар
export const postProduct = createAsyncThunk(
  'sellersProducts/postProduct',
  async (data, { rejectWithValue }) => {
    console.log(data);
    try {
      const res = await api.postProduct(data);
      // потом убрать
      console.log('postProduct, data, res', data, res);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Получить мои продукты.
export const getMyProducts = createAsyncThunk(
  'sellersProducts/getMyProducts',
  async (params, { rejectWithValue }) => {
    try {
      const res = await api.getMyProducts(params);
      // потом убрать
      console.log('getMyProducts, params, res', params, res);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Получить мой продукт по ID
export const getMyProductsId = createAsyncThunk(
  'sellersProducts/getMyProductsId',
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.getMyProductsId(id);
      // потом убрать
      console.log('getMyProductsId, params, res', id, res);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Обновить данные товара целиком.
export const changeProductId = createAsyncThunk(
  'sellersProducts/changeProductId',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await api.putProductId(id, data);
      // потом убрать
      console.log('changeProductId, { id, data }', id, data, res);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Обновить данные товара частично.
export const changeSomeProductId = createAsyncThunk(
  'sellersProducts/changeSomeProductId',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await api.patchProductId(id, data);
      // потом убрать
      console.log('changeSomeProductId, { id, data }', id, data, res);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Обновить данные товара частично.
export const deleteProductId = createAsyncThunk(
  'sellersProducts/deleteProductId',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.deleteProductId(id);
      // потом убрать
      console.log('deleteProductId,  id', id, res);
    } catch (err) {
      return rejectWithValue(err);
    } finally {
      dispatch(getMyProducts());
    }
  }
);

const setError = (state, action) => {
  const errMessage = Object.values(action.payload)[0];
  state.error = errMessage;
  if (action.payload.detail) {
    state.error = action.payload.detail;
  }
  const { statusText, status } = action.payload;
  state.status = action.error.message;
  state.resStatusText = statusText;
  state.resStatus = status;
};
const setPending = (state) => {
  state.status = 'loading';
  state.is_loading = true;
  state.error = null;
};
const setFulfilled = (state) => {
  state.is_loading = false;
  state.resStatusText = null;
  state.resStatus = null;
};

const sellersProductsSlice = createSlice({
  name: 'sellersProducts',
  initialState,
  reducers: {
    cleanStates(state = initialState) {
      return state;
    },
  },
  extraReducers: (builder) => {
    // postProduct
    builder
      .addCase(postProduct.pending, setPending)
      .addCase(postProduct.fulfilled, (state, action) => {
        console.log(postProduct);
        state.newProduct = action.payload;
        setFulfilled(state);
      })
      .addCase(postProduct.rejected, setError);

    // getMyProducts
    builder
      .addCase(getMyProducts.pending, setPending)
      .addCase(getMyProducts.fulfilled, (state, action) => {
        state.goods = action.payload;
        setFulfilled(state);
      })
      .addCase(getMyProducts.rejected, setError);

    // getMyProductsId
    builder
      .addCase(getMyProductsId.pending, setPending)
      .addCase(getMyProductsId.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
        setFulfilled(state);
      })
      .addCase(getMyProductsId.rejected, setError);

    // changeProductId
    builder
      .addCase(changeProductId.pending, setPending)
      .addCase(changeProductId.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
        setFulfilled(state);
      })
      .addCase(changeProductId.rejected, setError);

    // changeProductId
    builder
      .addCase(changeSomeProductId.pending, setPending)
      .addCase(changeSomeProductId.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
        setFulfilled(state);
      })
      .addCase(changeSomeProductId.rejected, setError);

    // changeProductId
    builder
      .addCase(deleteProductId.pending, setPending)
      .addCase(deleteProductId.fulfilled, (state) => {
        state.deletionMessage = 'Товар уделен';
        setFulfilled(state);
      })
      .addCase(deleteProductId.rejected, setError);
  },
});

export const { cleanStates } = sellersProductsSlice.actions;
export default sellersProductsSlice.reducer;
