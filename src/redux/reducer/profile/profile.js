import {createSlice} from '@reduxjs/toolkit';
import {getProfile} from './profile.action';

export const profileSlice = createSlice({
  name: 'counter',
  initialState: {
    profileResponse: {},
    profileResponesError: {},
    loading: false,
  },
  extraReducers: {
    [getProfile.fulfilled]: (state, action) => {
      state.profileResponse = action.payload;
      state.loading = false;
    },
    [getProfile.pending]: (state, action) => {
      state.loading = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = profileSlice.actions;

export default profileSlice.reducer;
