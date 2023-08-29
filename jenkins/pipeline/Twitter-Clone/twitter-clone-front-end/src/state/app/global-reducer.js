import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allAccounts: [],
};

const globalInfoSlice = createSlice({
  name: "globalInfo",
  initialState,
  reducers: {
    setAllAccounts(state, action) {
      state.allAccounts = action.payload;
    },
  },
});

export const globalInfoActions = globalInfoSlice.actions;
export default globalInfoSlice.reducer;
