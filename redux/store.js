// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggle/toggleSlice"; // Ensure the path is correct

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});

export default store;
