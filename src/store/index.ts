import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import game from './game';

const reducer = combineReducers({ game });

export type RootState = ReturnType<typeof reducer>;

const middleware = [];
if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middleware.push(createDebugger());
}

const store = configureStore({
    reducer,
    middleware
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
