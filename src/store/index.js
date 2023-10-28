import { configureStore } from '@reduxjs/toolkit';
import dataSearchFormReducer from './dataSearchFormSlice';
import dataProductsStateReduser from './dataProductsStateSlice';
import dataCartSliceReducer from './dataCartSlice';
import dataAuthorisationReducer from './dataAuthorisation';
import productCardDataReducer from './productCardDataSlice';

export {
  getProductCardData,
  getAuthorisationData,
  getCartData,
  getProductsData,
  getSearchFormData,
} from './selectors';
export * as selectors from './selectors';

export default configureStore({
  reducer: {
    dataSearchForm: dataSearchFormReducer,
    dataProductsState: dataProductsStateReduser,
    dataCart: dataCartSliceReducer,
    authorisation: dataAuthorisationReducer,
    productCardData: productCardDataReducer,
  },
});
