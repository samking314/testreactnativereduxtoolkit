import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
      increment: state => state + 1,
      decrement: state => state - 1
    }
  })

export const { increment, decrement } = counterSlice.actions;
export const selectCount = state => state;

export const createStore = () => {
    let store = configureStore({
        reducer: counterSlice.reducer
    });

    return store;
}

