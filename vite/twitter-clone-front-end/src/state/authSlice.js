import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: true,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const authSliceActions = authSlice.actions;
export default authSlice.reducer;
