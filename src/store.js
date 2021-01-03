import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './features/counterSlice';

//example store created with all reducers
export const createStore = () => {
    let store = configureStore({
        reducer: counterSlice.reducer
    });

    return store;
}

