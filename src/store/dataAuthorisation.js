/* eslint-disable no-use-before-define */
import { createSlice } from '@reduxjs/toolkit';

const dataAuthorisation = createSlice({
  name: 'authorisation',
  initialState: {
    is_Authorised: false,
    registerStep: 1,
    isLoginModal: true,
  },
  reducers: {
    authorise(state) {
      state.is_Authorised = true;
    },
    logOut(state) {
      state.is_Authorised = false;
    },
    toggleAuthorise(state) {
      state.is_Authorised = !state.is_Authorised;
    },
    setRegisterStep(state, action) {
      state.registerStep = action.payload;
    },
    setIsLoginModal(state, action) {
      state.isLoginModal = action.payload;
    },
  },
});

export const { logOut, authorise, toggleAuthorise, setRegisterStep, setIsLoginModal } =
  dataAuthorisation.actions;
export default dataAuthorisation.reducer;
