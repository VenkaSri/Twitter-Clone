import { createSlice } from "@reduxjs/toolkit";
import { resetActions } from "../sign-up/reset-reducer";

const stepsInitialState = {
  stepTwo: false
}

const stepsSlice = createSlice({
  name: "steps",
  initialState: stepsInitialState,
  reducers: {
    setStepTwo(state, action) {
      state.stepTwo = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(resetActions.resetAll, () => stepsInitialState);
  }
})

export const stepsActions = stepsSlice.actions;
export default stepsSlice.reducer;
