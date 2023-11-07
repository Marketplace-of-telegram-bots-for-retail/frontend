import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isEditing: false,
  userPhoto: null,
  isPasswordExpanded: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.user = action.payload;
    },
    setIsEditing(state, action) {
      state.isEditing = action.payload;
    },
    setUserPhoto(state, action) {
      state.userPhoto = action.payload;
    },
    setIsPasswordExpanded(state, action) {
      state.isPasswordExpanded = action.payload;
    },
  },
});

export const {
  setUserData,
  setIsEditing,
  setUserPhoto,
  setIsPasswordExpanded,
} = userSlice.actions;
export default userSlice.reducer;
