/* eslint-disable no-use-before-define */
import { createSlice } from '@reduxjs/toolkit';

const dataAuthorisation = createSlice({
  name: 'authorisation',
  initialState: {
    is_Authorised: false,
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
  },
});

export const { logOut, authorise, toggleAuthorise } = dataAuthorisation.actions;
export default dataAuthorisation.reducer;
