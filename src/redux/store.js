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
import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';

const reducers = combineReducers({
  users: persistReducer(
    {
      key: 'users',
      storage,
    },
    userSlicer,
  ),
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
