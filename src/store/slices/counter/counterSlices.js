import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 10,
};

export const counterSlice = createSlice({
  // "counter" this name is displayed in the devtools
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    // incrementBy: (state, { payload }) => {
    incrementBy: (state, action) => {
      state.counter += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy } = counterSlice.actions;
