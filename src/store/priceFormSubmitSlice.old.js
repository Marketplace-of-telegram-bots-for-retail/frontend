/* eslint-disable prefer-destructuring */
import { createSlice } from '@reduxjs/toolkit';

const priceFormSubmitSlice = createSlice({
  name: 'priceFormSubmit',
  initialState: {
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    priceFrom: 0,
    priceTo: 0,
  },
  reducers: {
    collecPricesInfo(state, actions) {
      state.priceFrom = actions.payload[0];
      state.priceTo = actions.payload[1];
    },
    collectCategoriesInfo(state, actions) {
      state.checkbox1 = actions.payload.checkbox1;
      state.checkbox2 = actions.payload.checkbox2;
      state.checkbox3 = actions.payload.checkbox3;
      state.checkbox4 = actions.payload.checkbox4;
    },
  },
});
export const { collecPricesInfo, collectCategoriesInfo } =
  priceFormSubmitSlice.actions;
export default priceFormSubmitSlice.reducer;
