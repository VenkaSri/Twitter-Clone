import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  userName: "",
  isAuthenticated: false

}

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setUsername(state, action) {
      state.userName = action.payload;
    },
    setAuthentication(state, action) {
      state.isAuthenticated = action.payload;
    }
  }
})


export const userInfoActions = userInfoSlice.actions;
export default userInfoSlice.reducer;