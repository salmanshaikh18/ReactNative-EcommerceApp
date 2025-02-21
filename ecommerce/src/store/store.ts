import createSagaMiddleware from 'redux-saga';
import reduxStorage from './storage';
import rootReducers from './rootReducers';
import {persistReducer, persistStore} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['cart', 'account'],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
