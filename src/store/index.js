import { configureStore } from '@reduxjs/toolkit';
import dataSearchFormReducer from './dataSearchFormSlice';
import dataProductsStateReduser from './dataProductsStateSlice';

export default configureStore({
  reducer: {
    dataSearchForm: dataSearchFormReducer,
    dataProductsState: dataProductsStateReduser,
  },
});
