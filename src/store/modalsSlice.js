/* eslint-disable no-use-before-define */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showLogoutModal: false,
  showDeleteProfileModal: false,
  showResetSellerDataFormModal: false,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setShowLogoutModal(state, action) {
      state.showLogoutModal = action.payload;
    },
    setShowDeleteProfileModal(state, action) {
      state.showDeleteProfileModal = action.payload;
    },
    setShowResetSellerDataFormModal(state, action) {
      state.showResetSellerDataFormModal = action.payload;
    },
  },
});

export const {
  setShowLogoutModal,
  setShowDeleteProfileModal,
  setShowResetSellerDataFormModal,
} = modalsSlice.actions;
export default modalsSlice.reducer;
