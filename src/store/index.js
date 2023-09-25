import { configureStore } from '@reduxjs/toolkit';
import priceFormSubmitReducer from './priceFormSubmitSlice';

export default configureStore({
  reducer: {
    priceFormSubmit: priceFormSubmitReducer,
  },
});
