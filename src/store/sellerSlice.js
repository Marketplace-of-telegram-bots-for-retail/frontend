import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  seller: [],
  status: null,
  error: null,
  is_loading: false,
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
    builder;
    // .addCase(getProductCard.pending, SetPending)
    // .addCase(getProductCard.fulfilled, setFulfilled)
    // .addCase(getProductCard.rejected, setError)
  },
});

export const {} = sellerSlice.actions;
export default sellerSlice.reducer;
