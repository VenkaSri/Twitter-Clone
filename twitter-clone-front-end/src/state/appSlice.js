import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appLoading: false,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setAppLoading(state, action) {
      state.appLoading = action.payload;
    },
  },
});

export const appSliceActions = appSlice.actions;
export default appSlice.reducer;
