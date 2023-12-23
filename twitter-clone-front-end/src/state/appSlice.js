import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appLoading: false,
  openDrawer: false,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setAppLoading(state, action) {
      state.appLoading = action.payload;
    },
    setOpenDrawer(state, action) {
      state.openDrawer = action.payload;
    },
  },
});

export const appSliceActions = appSlice.actions;
export default appSlice.reducer;
