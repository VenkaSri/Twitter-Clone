import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stepOneInfo: {
    name: "",
    email: "",
    dob: "",
  },
  doesUserExist: false,
};

const signupSlice = createSlice({
  name: "signupSlice",
  initialState,
  reducers: {
    setName(state, action) {
      state.stepOneInfo.name = action.payload;
    },
    setEmail(state, action) {
      state.stepOneInfo.email = action.payload;
    },
  },
});

export const signupSliceActions = signupSlice.actions;
export default signupSlice.reducer;
