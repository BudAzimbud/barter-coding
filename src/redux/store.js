import {configureStore} from '@reduxjs/toolkit';
import userSlicer from './reducer/user/userSlicer';
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
import products from './reducer/products/products';

const reducers = combineReducers({
  users: userSlicer,
  products: products,
});

const persistConfig = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['products'], //blacklisting a store attribute name, will not persist that store attribute.
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
