import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    products: [
      {
        name: 'Tutup Pensil Biru',
        description: 'Tutup idaman semua orang',
        requestBarter: 100,
        image:
          'https://asset.kompas.com/crops/o1K29R-sCa6DQ30jB0qKQwPDGWo=/0x229:4415x3173/750x500/data/photo/2021/10/09/61616eaf1884b.jpg',
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
        },
      },
      {
        name: 'Sticker panda',
        description: 'Tutup idaman semua orang',
        requestBarter: 190,
        image: 'https://m.media-amazon.com/images/I/61J8UP8pySL._SY450_.jpg',
        available: false,
        tags: ['Keren', 'Waw', 'Wadidaw'],
        users: {
          email: 'budazimbud@gmail.com',
          numberTelephone: '0895323496371',
          name: 'Azim',
          age: 19,
          gender: 'Male',
          address: 'Jalan cijembel rt rw 02 09 block sawo',
          rating: 5,
        },
      },
      {
        name: 'Korek Api',
        description: 'teduhh di semua kondisi',
        requestBarter: 3,
        image:
          'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/7/21/51cc3f43-0ec2-4096-88ed-00e8b53872d4.jpg',
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
        },
      },
      {
        name: 'Sendok',
        description: 'teduhh di semua kondisi',
        requestBarter: 3,
        image:
          'https://asset-a.grid.id/crop/0x0:0x0/x/photo/2020/07/17/812298309.jpg',
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
        },
      },
      {
        name: 'Topi preman',
        description: 'teduhh di semua kondisi',
        requestBarter: 3,
        image:
          'https://highlight.id/wp-content/uploads/2021/01/jenis-macam-model-topi-paling-keren-trendy-populer-fashionable_01.jpg',
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
        },
      },
      {
        name: 'Gagang Gantelan',
        description: 'teduhh di semua kondisi',
        requestBarter: 3,
        image:
          'https://s2.bukalapak.com/img/218891503/large/Gantungan_Kunci_Rumah_Adat_Tongkonan.jpg',
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
        },
      },
      {
        name: 'Masker',
        description: 'teduhh di semua kondisi',
        requestBarter: 3,
        image:
          'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/05/19061026/aturan-pemakaian-masker-terbaru-yang-perlu-dipahami-halodoc.jpg',
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
        },
      },
      {
        name: 'Kaos kaki',
        description: 'teduhh di semua kondisi',
        requestBarter: 3,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Hl_ldWVloZbCGtso1yldJ0bTb1Qqh1SSgA&usqp=CAU',
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
        },
      },
      {
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
        },
      },
    ],
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
