import { configureStore } from '@reduxjs/toolkit';
import dataSearchFormReducer from './dataSearchFormSlice';
import dataProductsStateReduser from './dataProductsStateSlice';
import dataFavoritesStateReduser from './dataFavoritesStateSlice';

export default configureStore({
  reducer: {
    dataSearchForm: dataSearchFormReducer,
    dataProductsState: dataProductsStateReduser,
    dataFavoritesState: dataFavoritesStateReduser,
  },
});
