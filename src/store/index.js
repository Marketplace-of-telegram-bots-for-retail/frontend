import { configureStore } from '@reduxjs/toolkit';
import dataSearchFormReducer from './dataSearchFormSlice';
import dataProductsStateReduser from './dataProductsStateSlice';
import dataCartSliceReducer from './dataCartSlice';

export default configureStore({
  reducer: {
    dataSearchForm: dataSearchFormReducer,
    dataProductsState: dataProductsStateReduser,
    dataCart: dataCartSliceReducer,
  },
});
