import { configureStore } from '@reduxjs/toolkit';
import searchFormDataReducer from './searchFormDataSlice';
import productsDataReduser from './productsDataSlice';
import cartDataReducer from './cartDataSlice';
import productCardDataReducer from './productCardDataSlice';
import userOrdersDataReducer from './userOrdersDataSlice';
import userDataReducer from './userSlice';
import sellersProductsReducer from './sellersProductsSlice';

export default configureStore({
  reducer: {
    searchFormData: searchFormDataReducer,
    productsData: productsDataReduser,
    cartData: cartDataReducer,
    productCardData: productCardDataReducer,
    userOrdersData: userOrdersDataReducer,
    userData: userDataReducer,
    sellersProducts: sellersProductsReducer,

  },
});
export {
  getProductCardData,
  getCartData,
  getProductsData,
  getSearchFormData,
  getUserOrdersData,
  getUserData,
  getSellersProducts,
} from './selectors';
export * as selectors from './selectors';
