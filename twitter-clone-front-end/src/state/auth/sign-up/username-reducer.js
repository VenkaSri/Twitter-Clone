import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enteredUsername: "",
  isUsernameSet: true,

}

const usernameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    setUsername(state, action) {
      state.enteredUsername = action.payload;
    },
    setUsernameValidity(state, action) {
      state.isUsernameSet = action.payload;
    }
  }
})


export const usernameActions = usernameSlice.actions;
export default usernameSlice.reducer;