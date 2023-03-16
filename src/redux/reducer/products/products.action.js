import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../../helper/http';

export const getProduct = createAsyncThunk(
  'getproducts',
  async (arg, thunkAPI) => {
    console.log(arg);
    try {
      const response = await api.get('products');
      return response.data;
    } catch (error) {
      console.log('error getting', error);
      thunkAPI.rejectedValue(error);
    }
  },
);
