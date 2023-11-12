import { configureStore } from '@reduxjs/toolkit';
import searchFormDataReducer from './searchFormDataSlice';
import productsDataReduser from './productsDataSlice';
import cartDataReducer from './cartDataSlice';
import productCardDataReducer from './productCardDataSlice';
import userOrdersDataReducer from './userOrdersDataSlice';
import userDataReducer from './userSlice';
import sellersProductsReducer from './sellersProductsSlice';
import modalsReducer from './modalsSlice';

export default configureStore({
  reducer: {
    searchFormData: searchFormDataReducer,
    productsData: productsDataReduser,
    cartData: cartDataReducer,
    productCardData: productCardDataReducer,
    userOrdersData: userOrdersDataReducer,
    userData: userDataReducer,
    sellersProducts: sellersProductsReducer,
    modals: modalsReducer,
  },
});
export {
  getProductCardData,
  getCartData,
  getProductsData,
  getSearchFormData,
  getUserOrdersData,
  getUserData,
  getModals,
} from './selectors';
export * as selectors from './selectors';
