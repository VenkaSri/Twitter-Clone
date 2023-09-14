import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stepOneInfo: {
    name: "",
    email: "",
    dob: {
      year: "",
      month: "",
      day: "",
    },
  },
  password: "",
  currentStep: 3,
  doesUserExist: false,
  shouldAutoFocus: "",
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
    setMonth(state, action) {
      state.stepOneInfo.dob.month = action.payload;
    },
    setDay(state, action) {
      state.stepOneInfo.dob.day = action.payload;
    },
    setYear(state, action) {
      state.stepOneInfo.dob.year = action.payload;
    },
    setCurrentStep(state, action) {
      state.currentStep = action.payload;
    },
    setShouldAutoFocus(state, action) {
      state.shouldAutoFocus = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const signupSliceActions = signupSlice.actions;
export default signupSlice.reducer;
