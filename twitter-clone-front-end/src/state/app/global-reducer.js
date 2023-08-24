import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allAccounts: [],
  isDarkMode: false,
};

const globalInfoSlice = createSlice({
  name: "globalInfo",
  initialState,
  reducers: {
    setAllAccounts(state, action) {
      state.allAccounts = action.payload;
    },
    setIsDarkMode(state, action) {
      state.isDarkMode = action.payload;
    },
  },
});

export const globalInfoActions = globalInfoSlice.actions;
export default globalInfoSlice.reducer;
