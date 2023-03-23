import { createSlice } from "@reduxjs/toolkit";
import { resetActions } from "./reset-reducer";

const stepOneInitialState = {
  isNameEntered: false,
  isEmailEntered: false,
  isDOBEntered: false,
  isPasswordEntered: false
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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetActions.resetAll, () => stepOneInitialState);
  }
});

export const stepOneActions = stepOneSlice.actions;
export default stepOneSlice.reducer;
