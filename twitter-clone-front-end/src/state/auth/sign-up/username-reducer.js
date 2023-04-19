import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enteredUsername: "Test",
  isNewUsernameEntered: false,
  isUsernameValid: false,
}

const usernameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    setUsername(state, action) {
      state.enteredUsername = action.payload;
    },
    setNewUserNameEntered(state, action) {
      state.isNewUsernameEntered = action.payload;
    },
    setUsernameValid(state, action) {
      state.isUsernameValid = (action.payload);
    }
  }
})


export const usernameActions = usernameSlice.actions;
export default usernameSlice.reducer;