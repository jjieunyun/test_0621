import { configureStore } from "@reduxjs/toolkit";
import memoReducer from './components/memoSlice';

export const store = configureStore({
    reducer : {
        memos : memoReducer,

    }
})