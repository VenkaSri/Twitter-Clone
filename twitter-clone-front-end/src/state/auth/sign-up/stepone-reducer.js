import { createSlice } from "@reduxjs/toolkit";

const stepOneSlice = createSlice({
  name: "stepOneFlag",
  initialState: {isNameEntered: false, isEmailEntered: false, isFormCompleted: false},
  reducers: {
    setNameEntered(state, action) {
      state.isNameEntered = action.payload;
    },
    setEmailEntered(state, action) {
      state.isEmailEntered = action.payload;
    }
  }
});

export const stepOneActions = stepOneSlice.actions;
export default stepOneSlice.reducer;