import {createSlice} from '@reduxjs/toolkit';
import {getProduct} from './products.action';

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    products: [
      {
        id: 1,
        name: 'Poto Profile Whatsapp',
        descripion: 'teduhh di semua kondisi',
        requestBarter: 3,
        image:
          'https://i.pinimg.com/originals/34/83/79/3483794198b80fc3746a76760cde6966.jpg',
        available: true,
        tags: ['Keren', 'Waw', 'Wadidaw'],
        users: {
          email: 'budazimbud@gmail.com',
          numberTelephone: '0895323496371',
          name: 'Azim',
          age: 19,
          gender: 'Male',
          address: 'Jalan cijembel rt rw 02 09 block sawo',
          rating: 5,
          image:
            'https://i.pinimg.com/originals/34/83/79/3483794198b80fc3746a76760cde6966.jpg',
        },
      },
      {
        id: 2,
        name: 'Poto Profile Whatsapp',
        descripion: 'teduhh di semua kondisi',
        requestBarter: 3,
        image:
          'https://i.pinimg.com/originals/34/83/79/3483794198b80fc3746a76760cde6966.jpg',
        available: true,
        tags: ['Keren', 'Waw', 'Wadidaw'],
        users: {
          email: 'budazimbud@gmail.com',
          numberTelephone: '0895323496371',
          name: 'Azim',
          age: 19,
          gender: 'Male',
          address: 'Jalan cijembel rt rw 02 09 block sawo',
          rating: 5,
          image:
            'https://i.pinimg.com/originals/34/83/79/3483794198b80fc3746a76760cde6966.jpg',
        },
      },
      {
        id: 3,
        name: 'Poto Profile Whatsapp',
        descripion: 'teduhh di semua kondisi',
        requestBarter: 3,
        image:
          'https://i.pinimg.com/originals/34/83/79/3483794198b80fc3746a76760cde6966.jpg',
        available: true,
        tags: ['Keren', 'Waw', 'Wadidaw'],
        users: {
          email: 'budazimbud@gmail.com',
          numberTelephone: '0895323496371',
          name: 'Azim',
          age: 19,
          gender: 'Male',
          address: 'Jalan cijembel rt rw 02 09 block sawo',
          rating: 5,
          image:
            'https://i.pinimg.com/originals/34/83/79/3483794198b80fc3746a76760cde6966.jpg',
        },
      },
      {
        id: 4,
        name: 'Poto Profile Whatsapp',
        descripion: 'teduhh di semua kondisi',
        requestBarter: 3,
        image:
          'https://i.pinimg.com/originals/34/83/79/3483794198b80fc3746a76760cde6966.jpg',
        available: true,
        tags: ['Keren', 'Waw', 'Wadidaw'],
        users: {
          email: 'budazimbud@gmail.com',
          numberTelephone: '0895323496371',
          name: 'Azim',
          age: 19,
          gender: 'Male',
          address: 'Jalan cijembel rt rw 02 09 block sawo',
          rating: 5,
          image:
            'https://i.pinimg.com/originals/34/83/79/3483794198b80fc3746a76760cde6966.jpg',
        },
      },
      {
        id: 5,
        name: 'Poto Profile Whatsapp',
        descripion: 'teduhh di semua kondisi',
        requestBarter: 3,
        image:
          'https://i.pinimg.com/originals/34/83/79/3483794198b80fc3746a76760cde6966.jpg',
        available: true,
        tags: ['Keren', 'Waw', 'Wadidaw'],
        users: {
          email: 'budazimbud@gmail.com',
          numberTelephone: '0895323496371',
          name: 'Azim',
          age: 19,
          gender: 'Male',
          address: 'Jalan cijembel rt rw 02 09 block sawo',
          rating: 5,
          image:
            'https://i.pinimg.com/originals/34/83/79/3483794198b80fc3746a76760cde6966.jpg',
        },
      },
    ],
    loading: false,
  },
  reducers: {
    setUsers: (state, actions) => {
      state.user = {...state.user, ...actions.payload};
    },
  },
  extraReducers: {
    [getProduct.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    [getProduct.pending]: (state, action) => {
      state.loading = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUsers} = userSlice.actions;

export default userSlice.reducer;
