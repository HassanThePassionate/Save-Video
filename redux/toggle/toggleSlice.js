// redux/toggleSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggled: true,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggle: (state) => {
      state.toggled = !state.toggled;
    },
  },
});

export const { toggle } = toggleSlice.actions;
export default toggleSlice.reducer;
