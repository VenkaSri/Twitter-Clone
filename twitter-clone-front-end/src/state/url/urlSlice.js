import { createSlice } from "@reduxjs/toolkit";

const urlSlice = createSlice({
  name: "urlSlice",
  initialState: { currentUrl: "" },
  reducers: {
    setCurrentUrl(state, action) {
      state.currentUrl = action.payload;
    },
  },
});

export const urlSliceActions = urlSlice.actions;
export default urlSlice.reducer;
