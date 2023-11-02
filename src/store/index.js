import { configureStore } from '@reduxjs/toolkit';
import searchFormDataReducer from './searchFormDataSlice';
import productsDataReduser from './productsDataSlice';
import cartDataReducer from './cartDataSlice';
import dataAuthorisationReducer from './dataAuthorisation';
import productCardDataReducer from './productCardDataSlice';
import userOrdersDataReducer from './userOrdersDataSlice';

export default configureStore({
  reducer: {
    searchFormData: searchFormDataReducer,
    productsData: productsDataReduser,
    cartData: cartDataReducer,
    authorisation: dataAuthorisationReducer,
    productCardData: productCardDataReducer,
    userOrdersData: userOrdersDataReducer,
  },
});
export {
  getProductCardData,
  getAuthorisationData,
  getCartData,
  getProductsData,
  getSearchFormData,
} from './selectors';
export * as selectors from './selectors';
