import {configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import productsSlicer from './reducer/products/products';
import userSlicer from './reducer/user/userSlicer';

const reducers = combineReducers({
  users: userSlicer,
  products: productsSlicer,
});

const persistConfig = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['products'],
    whitelist: ['users'], 
  },
  reducers,
);

export const store = configureStore({
  reducer: persistConfig,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
