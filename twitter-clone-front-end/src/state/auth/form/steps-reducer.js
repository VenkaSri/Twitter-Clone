import { createSlice } from "@reduxjs/toolkit";

const stepsSlice = createSlice({
  name: "steps",
  initialState: { stepTwo: false},
  reducers: {
    setStepTwo(state, action) {
      state.stepTwo = action.payload;
    }
  }
})

export const stepsActions = stepsSlice.actions;
export default stepsSlice.reducer;
