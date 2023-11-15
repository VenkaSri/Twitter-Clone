import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const resetSlice = createSlice({
  name: "reset",
  initialState,
  reducers: {
    resetAll() {
      return initialState;
    },
  },
});

export const resetActions = resetSlice.actions;
export default resetSlice.reducer;