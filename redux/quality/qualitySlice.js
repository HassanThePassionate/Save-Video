import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quality: "720p",
};

const qualitySlice = createSlice({
  name: "qualits",
  initialState,
  reducers: {
    setQuality: (state, action) => {
      state.quality = action.payload;
    },
  },
});

export const { setQuality } = qualitySlice.actions;

export default qualitySlice.reducer;
