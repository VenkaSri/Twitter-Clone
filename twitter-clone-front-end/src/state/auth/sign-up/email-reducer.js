import { createSlice } from "@reduxjs/toolkit";
import { resetActions } from "./reset-reducer";

const emailInitialState = {
  enteredEmail: "",
  isValid: false,
  isAvailable: false,
  hasOnlySpaces: true,
  hasEnteredInput: false,
  shouldAutoFocus: false,
};

const emailSlice = createSlice({
  name: "email",
  initialState: emailInitialState,
  reducers: {
    setEmail(state, action) {
      state.enteredEmail = action.payload;
    },
    isEmailValid(state, action) {
      state.isValid = action.payload;
    },
    isEmailAvailable(state, action) {
      state.isAvailable = action.payload;
    },
    isThereOnlySpaces(state, action) {
      state.hasOnlySpaces = action.payload;
    },
    setHasEnteredInput(state, action) {
      state.hasEnteredInput = action.payload;
    },
    setAutoFocus(state, action) {
      state.shouldAutoFocus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetActions.resetAll, () => emailInitialState);
  },
});

export const emailActions = emailSlice.actions;
export default emailSlice.reducer;
