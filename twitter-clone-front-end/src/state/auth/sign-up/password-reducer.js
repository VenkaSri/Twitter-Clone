import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enteredPassword: "",
  isPasswordValid: false,
}

const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    setEnteredPassword(state, action) {
      state.enteredPassword = action.payload;
    },
    setPasswordValidity(state, action) {
      state.isPasswordValid = action.payload;
    }
  }
})

export const passwordActions = passwordSlice.actions;
export default passwordSlice.reducer;
