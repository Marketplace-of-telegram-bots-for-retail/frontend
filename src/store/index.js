import { configureStore } from '@reduxjs/toolkit';
import dataSearchFormReducer from './dataSearchFormSlice';
import dataProductsStateReduser from './dataProductsStateSlice';
import dataCartSliceReducer from './dataCartSlice';
import dataAuthorisationReducer from './dataAuthorisation';
import productCardDataReducer from './productCardDataSlice';

export default configureStore({
  reducer: {
    dataSearchForm: dataSearchFormReducer,
    dataProductsState: dataProductsStateReduser,
    dataCart: dataCartSliceReducer,
    authorisation: dataAuthorisationReducer,
    productCardData: productCardDataReducer,
  },
});

export * as selectors from './selectors';
