import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/Api';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const res = api.getCategories();
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
