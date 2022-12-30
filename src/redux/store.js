import {configureStore} from '@reduxjs/toolkit';
import userSlicer from './reducer/user/userSlicer';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import products from './reducer/products/products';

const reducers = combineReducers({
  users: persistReducer(
    {
      key: 'users',
      storage: AsyncStorage,
    },
    userSlicer,
  ),
  products: products,
});

export default configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
