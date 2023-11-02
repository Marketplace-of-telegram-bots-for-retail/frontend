/* eslint-disable no-use-before-define */
import { createSlice } from '@reduxjs/toolkit';

const dataAuthorisation = createSlice({
  name: 'authorisation',
  initialState: {
    is_Authorised: false,
    registerStep: 1,
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
  },
});

export const { logOut, authorise, toggleAuthorise, setRegisterStep } = dataAuthorisation.actions;
export default dataAuthorisation.reducer;
