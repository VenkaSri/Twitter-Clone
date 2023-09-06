import { combineReducers } from "@reduxjs/toolkit";

import authLoadingSlice from "./dialog/signup/auth/authLoadingSlice";

const rootLoadingSlice = combineReducers({
  loginLoading: authLoadingSlice,
});

export default rootLoadingSlice;
