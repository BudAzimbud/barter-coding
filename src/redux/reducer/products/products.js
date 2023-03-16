import {createSlice} from '@reduxjs/toolkit';
import { getProduct } from './products.action';

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    products: [],
  },
  reducers: {
    setUsers: (state, actions) => {
      state.user = {...state.user, ...actions.payload};
    },
  },
  extraReducers: {
    [getProduct.fulfilled]: (state, action) => {
      state.products = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUsers} = userSlice.actions;

export default userSlice.reducer;
