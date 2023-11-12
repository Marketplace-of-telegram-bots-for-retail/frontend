/* eslint-disable no-use-before-define */
/* eslint-disable no-debugger */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../utils/Api';
import { checkToken, setToken } from '../utils/tokenStorage';
import { setShowLogoutModal, setShowDeleteProfileModal } from './modalsSlice';

const initialState = {
  user: {},
  seller: {},
  isEditing: false,
  userPhoto: null,
  isPasswordExpanded: false,
  isAuthorized: false,
  registerStep: 1,
  isLoginModal: true,
  authErrorMessage: '',
  isAuthChecked: true,
  status: null,
  error: null,
  is_loading: false,
  resStatus: null,
  resStatusText: null,
  emailCheck: null,
};

// Авторизация
export const logIn = createAsyncThunk(
  'user/logIn',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.postLogIn(data);
      console.log(res);
      if (res) {
        setToken(res.auth_token, data.rememberMe);
        dispatch(setIsAuthorized(true));
      } else {
        return rejectWithValue(res);
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Выход
export const logOut = createAsyncThunk(
  'user/logOut',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await api.postLogOut();
      dispatch(setShowLogoutModal(false));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Регистрация
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (data, { rejectWithValue }) => {
    try {
      await api.postUser(data);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Регистрация
export const emailVerification = createAsyncThunk(
  'user/emailVerification',
  async (email, { rejectWithValue }) => {
    const data = `?email=${email}`;
    console.log(data);
    try {
      return await api.emailVerification(data);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Изменить пароль
export const changePassword = createAsyncThunk(
  'user/changePassword',
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.changePassword(data);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Обновление данных профиля
export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.patchUserMe(data);
      // проверить необходимость вызова изменения пароля
      await changePassword({
        current_password: data.current_password,
        new_password: data.new_password,
      });
      return res;
      // cbTokenCheck();
      // dispatch(setIsEditing(false));
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Удаление пользователя
export const deleteUser = createAsyncThunk(
  'user/deleteUser',
  async (password, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.deleteUserMe({ current_password: password });
      dispatch(setShowDeleteProfileModal(false));
      return res.status;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// получить пользователя
export const getUserMe = createAsyncThunk(
  'user/getUserMe',
  async (data, { rejectWithValue, dispatch }) => {
    try {
      if (!checkToken()) {
        return rejectWithValue(err);
      }
      const res = await api.getUserMe(data);
      if (res.is_seller) {
        dispatch(getSeller());
      }
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// стать продавцом
export const becomeSeller = createAsyncThunk(
  'user/becomeSeller',
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.postBecomeSeller(data);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// получить данные продавца
export const getSeller = createAsyncThunk(
  'user/getSeller',
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.getBecomeSeller(data);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// получить данные продавца
export const changeSellerDetails = createAsyncThunk(
  'user/changeSellerDetails',
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.putBecomeSeller(data);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
// получить данные продавца
export const changeSomeSellerDetails = createAsyncThunk(
  'user/changeSomeSellerDetails',
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.patchBecomeSeller(data);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// // добавить товар
// export const postProduct = createAsyncThunk(
//   'user/postProduct',
//   async (data, { rejectWithValue }) => {
//     try {
//       const res = await api.postProduct(data);
//       // потом убрать
//       console.log('postProduct, data, res', data, res);
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   }
// );

const setError = (state, action) => {
  const errMessage = Object.values(action.payload)[0];
  state.authErrorMessage = errMessage;
  if (action.payload.detail) {
    state.error = action.payload.detail;
  }
  const { statusText, status } = action.payload;
  state.status = action.error.message;
  state.resStatusText = statusText;
  state.resStatus = status;
};
const setPending = (state) => {
  state.status = 'loading';
  state.is_loading = true;
  state.error = null;
};
const setFulfilled = (state) => {
  state.is_loading = false;
  state.resStatusText = null;
  state.resStatus = null;
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
    setAuthChecked(state) {
      state.isAuthChecked = true;
    },
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
      console.log(action);
      const errMessage = Object.values(action.payload)[0];
      state.authErrorMessage = errMessage;
    },
  },
  extraReducers: (builder) => {
    builder
      // logIn
      .addCase(logIn.pending, setPending)
      .addCase(logIn.fulfilled, (state) => {
        state.isAuthorized = true;
        setFulfilled(state);
      })
      .addCase(logIn.rejected, setError)
      // logOut
      .addCase(logOut.pending, setPending)
      .addCase(logOut.fulfilled, (state) => {
        state.isAuthorized = false;
        state.registerStep = 1;
        localStorage.clear();
        sessionStorage.clear();
        setFulfilled(state);
      })
      .addCase(logOut.rejected, setError)
      // registerUser
      .addCase(registerUser.pending, setPending)
      .addCase(registerUser.fulfilled, (state) => {
        setFulfilled(state);
        localStorage.removeItem('registerFormData');
        state.registerStep = 3;
      })
      .addCase(registerUser.rejected, setError)

      // Изменить пароль
      .addCase(changePassword.pending, setPending)
      .addCase(changePassword.fulfilled, setFulfilled)
      .addCase(changePassword.rejected, setError)

      // Обновление данных профиля
      .addCase(updateProfile.pending, setPending)
      .addCase(updateProfile.fulfilled, (state, action) => {
        setFulfilled(state, action);
        state.isEditing = false;
        state.user = action.payload;
      })
      .addCase(updateProfile.rejected, setError)

      // Удаление профиля
      .addCase(deleteUser.pending, setPending)
      .addCase(deleteUser.fulfilled, (state, action) => {
        setFulfilled(state, action);
        state.isAuthorized = false;
        state.registerStep = 1;
        localStorage.clear();
        sessionStorage.clear();
      })
      .addCase(deleteUser.rejected, setError)

      // Получение данных профиля
      .addCase(getUserMe.pending, setPending)
      .addCase(getUserMe.fulfilled, (state, action) => {
        setFulfilled(state, action);
        state.user = action.payload;
        state.isAuthorized = true;
      })
      .addCase(getUserMe.rejected, (state, action) => {
        setError(state, action);
        state.isAuthorized = false;
        localStorage.clear();
        sessionStorage.clear();
      })

      // стать продавцом
      .addCase(becomeSeller.pending, setPending)
      .addCase(becomeSeller.fulfilled, (state, action) => {
        setFulfilled(state, action);
      })
      .addCase(becomeSeller.rejected, (state, action) => {
        setError(state, action);
      })
      // получение данных продавца
      .addCase(getSeller.pending, setPending)
      .addCase(getSeller.fulfilled, (state, action) => {
        setFulfilled(state, action);
        state.seller = action.payload;
      })
      .addCase(getSeller.rejected, (state, action) => {
        setError(state, action);
      })
      // изменить данные продавца
      .addCase(changeSellerDetails.pending, setPending)
      .addCase(changeSellerDetails.fulfilled, (state, action) => {
        setFulfilled(state, action);
        state.seller = action.payload;
      })
      .addCase(changeSellerDetails.rejected, (state, action) => {
        setError(state, action);
      })

      // изменить данные продавца
      .addCase(changeSomeSellerDetails.pending, setPending)
      .addCase(changeSomeSellerDetails.fulfilled, (state, action) => {
        setFulfilled(state, action);
        state.seller = action.payload;
      })
      .addCase(changeSomeSellerDetails.rejected, (state, action) => {
        setError(state, action);
      })

      // изменить данные продавца
      .addCase(emailVerification.pending, setPending)
      .addCase(emailVerification.fulfilled, (state, action) => {
        setFulfilled(state, action);
        state.emailCheck = action.payload;
        console.log(action.payload.email);
      })
      .addCase(emailVerification.rejected, (state, action) => {
        setError(state, action);
        state.emailCheck = action.payload;
        console.log(action.payload.email[0]);
      });
  },
});

export const {
  setUserData,
  setIsEditing,
  setUserPhoto,
  setIsPasswordExpanded,
  setIsAuthorized,
  setRegisterStep,
  setIsLoginModal,
  setAuthErrorMessage,
  setAuthChecked,
} = userSlice.actions;
export default userSlice.reducer;
