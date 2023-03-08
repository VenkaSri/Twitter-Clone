import { createSlice } from "@reduxjs/toolkit";

const emailInitialState = {
  enteredEmail: "",
  apiResponse: "",
  isValid: false,
  isAvailable: false,
  hasOnlySpaces: true,
  hasEnteredInput: false
}

const emailSlice = createSlice({
  name:"email",
  initialState: emailInitialState,
  reducers: {
    setEmail(state, action) {
      state.enteredEmail = action.payload;
    },
    setAPIResponse(state, action) {
      state.apiResponse = action.payload;
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
    }
  }
});

export const emailActions = emailSlice.actions;
export default emailSlice.reducer;