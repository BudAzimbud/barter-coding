import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    user: {
      email: 'budazimbud@gmail.com',
      numberTelephone: '0895323496371',
      name: 'Azim',
      age: 19,
      gender: 'Male',
      address: 'Jalan cijembel rt rw 02 09 block sawo',
    },
  },
  reducers: {
    setUsers: (state, actions) => {
      state.user = {...state.user, ...actions.payload};
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUsers} = userSlice.actions;

export default userSlice.reducer;
