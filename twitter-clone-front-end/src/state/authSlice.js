import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "@/services/authApi";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.checkAuthStatus.matchFulfilled,
      (state, action) => {
        state.isAuthenticated = action.payload.validToken;
      }
    );
    builder.addMatcher(
      authApi.endpoints.checkAuthStatus.matchRejected,
      (state, action) => {
        state.isAuthenticated = false;
      }
    );
  },
});

export const authSliceActions = authSlice.actions;
export default authSlice.reducer;
