import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  username: "",
  isAuthenticated: false,
  isUsernameSet: true,

}

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setUsername(state, action) {
      state.username = action.payload;
    },
    setAuthentication(state, action) {
      state.isAuthenticated = action.payload;
    },
    setUsernameValidity(state, action) {
      state.isUsernameSet = action.payload;
    }
  }
})


export const userInfoActions = userInfoSlice.actions;
export default userInfoSlice.reducer;