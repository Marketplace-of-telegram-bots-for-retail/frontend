/* eslint-disable no-use-before-define */
import { createSlice } from '@reduxjs/toolkit';

const dataAuthorisation = createSlice({
  name: 'authorisation',
  initialState: {
    isAuthorized: false,
    registerStep: 1,
    isLoginModal: true,
    authErrorMessage: '',
  },
  reducers: {
    setIsAuthorized(state, action) {
      state.isAuthorized = action.payload;
    },
    setRegisterStep(state, action) {
      state.registerStep = action.payload;
    },
    setIsLoginModal(state, action) {
      state.isLoginModal = action.payload;
    },
    setAuthErrorMessage(state, action) {
      state.authErrorMessage = action.payload;
    },
  },
});

export const { setIsAuthorized, setRegisterStep, setIsLoginModal, setAuthErrorMessage } =
  dataAuthorisation.actions;
export default dataAuthorisation.reducer;
