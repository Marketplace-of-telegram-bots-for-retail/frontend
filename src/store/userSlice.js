import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isEditing: false,
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
  },
});

export const { setUserData, setIsEditing } = userSlice.actions;
export default userSlice.reducer;
