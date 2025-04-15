import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Slices
import appSlice from '../redux/appSlice';
import tasksSlice from '../redux/tasksSlice';
import userSlice from '../redux/userSlice';
import dummyNetwokSlice from '../redux/networkSlice';

/**
 * The root reducer for the Redux store.
 * It combines multiple slices of state into a single reducer function.
 *
 * @param {object} appSlice - The app slice reducer.
 * @param {object} tasksSlice - The tasks slice reducer.
 * @param {object} userSlice - The user slice reducer.
 * @param {object} dummyNetwokSlice - The dummy network slice reducer.
 */
const rootReducer = combineReducers({
  app: appSlice,
  todos: tasksSlice,
  user: userSlice,
  dummyNetwork: dummyNetwokSlice,
});


const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // AsyncStorage
  blacklist: ['app'], // these reduce will not persist data
  whitelist: ['todos', 'user'], // these reduce will persist data
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * The Redux store instance.
 */
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({immutableCheck: false, serializableCheck: false}),
});

export const persistor = persistStore(store);

/**
 * The type representing the state of the root store.
 */
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
