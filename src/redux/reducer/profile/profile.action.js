import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../../helper/http';
export const getProfile = createAsyncThunk(
  'getProfile',
  async (args, thunkAPI) => {
    try {
      const response = await api.get('users?email=budazimbud@gmail.com');
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  },
);
