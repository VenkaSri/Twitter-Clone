import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  doesUserExist: false,
};

const loginSlice = createSlice({
  name: "reducerInfo",
  initialState,
  reducers: {
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setDoesUserExist(state, action) {
      state.doesUserExist = action.payload;
    },
  },
});

export const loginSliceActions = loginSlice.actions;
export default loginSlice.reducer;
