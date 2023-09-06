import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userExists: false,
};

const authLoadingSlice = createSlice({
  name: "reducerInfo",
  initialState,
  reducers: {
    setUserExist(state, action) {
      state.userExists = action.payload;
    },
  },
});

export const authLoadingActions = authLoadingSlice.actions;
export default authLoadingSlice.reducer;
