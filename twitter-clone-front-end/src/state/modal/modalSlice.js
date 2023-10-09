import { combineReducers } from "@reduxjs/toolkit";

import snackbarSlice from "./snackbarSlice";

const modalSlice = combineReducers({
  snackbarSlice: snackbarSlice,
});

export default modalSlice;
