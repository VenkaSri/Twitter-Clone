import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enteredPassword: "",
}

const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    setEnteredPassword(state, action) {
      state.enteredPassword = action.payload;
    }
  }
})

export const passwordActions = passwordSlice.actions;
export default passwordSlice.reducer;

// ^(?=.{8}$

// ^                         Start anchor
// (?=.*[A-Z].*[A-Z])        Ensure string has two uppercase letters.
// (?=.*[!@#$&*])            Ensure string has one special case letter.
// (?=.*[0-9].*[0-9])        Ensure string has two digits.
// (?=.*[a-z].*[a-z].*[a-z]) Ensure string has three lowercase letters.
// .{8}                      Ensure string is of length 8.
// $                         End anchor.