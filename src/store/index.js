import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
 import createSagaMiddleware from "redux-saga";
import saga from "./sagaindex";
import user from './usereredux';
 import product from './productredux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
  } from "redux-persist";

const persistConfig = {
    key: "root",
    version: 1,
    storage ,
    whitelist:['user','product']
  };
  const reducer = combineReducers({
     user,
     product,
})
const persistedReducer = persistReducer(persistConfig, reducer);
let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: persistedReducer,
    middleware: [...getDefaultMiddleware({
      thunk: false ,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }}),sagaMiddleware]
})
sagaMiddleware.run(saga);

const persistor = persistStore(store);

export { persistor, store };
