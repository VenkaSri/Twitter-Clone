import { createSlice } from "@reduxjs/toolkit";
import { resetActions } from "../sign-up/reset-reducer";

const initialState = {
  currentStep: 5,
};

const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    setCurrentStep(state, action) {
      state.currentStep = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetActions.resetAll, () => initialState);
  },
});

export const stepsActions = stepsSlice.actions;
export default stepsSlice.reducer;
