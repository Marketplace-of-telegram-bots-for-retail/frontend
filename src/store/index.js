import { configureStore } from '@reduxjs/toolkit';
import dataSearchFormReducer from './dataSearchFormSlice';

export default configureStore({
  reducer: {
    dataSearchForm: dataSearchFormReducer,
  },
});
