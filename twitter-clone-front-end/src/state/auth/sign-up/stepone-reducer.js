import { createSlice } from "@reduxjs/toolkit";

const stepOneInitialState = {
  isNameEntered: false,
  isEmailEntered: false,
  isDOBEntered: false,
};

const stepOneSlice = createSlice({
  name: "stepOneFlag",
  initialState: stepOneInitialState,
  reducers: {
    setNameEntered(state, action) {
      state.isNameEntered = action.payload;
    },
    setEmailEntered(state, action) {
      state.isEmailEntered = action.payload;
    },
    setDOBEntered(state, action) {
      state.isDOBEntered = action.payload;
    }
  },
});

export const stepOneActions = stepOneSlice.actions;
export default stepOneSlice.reducer;
