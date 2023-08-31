import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const loginReducerInfo = createSlice({
  name: "reducerInfo",
  initialState,
  reducers: {
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const loginReducerInfoActions = loginReducerInfo.actions;
export default loginReducerInfo.reducer;
