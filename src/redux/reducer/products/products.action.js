import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../../helper/http';

export const getProduct = createAsyncThunk(
  'getproducts',
  async (arg, thunkAPI) => {
    try {
      const response = await api.get('products');
      return response.data;
    } catch (error) {
      thunkAPI.rejectedValue(error);
    }
  },
);
