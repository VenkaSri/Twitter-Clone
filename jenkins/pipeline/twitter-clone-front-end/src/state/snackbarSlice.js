import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  isOpen: false,
};

const snackbarSlice = createSlice({
  name: "snackbarSlice",
  initialState,
  reducers: {
    openSnackbar(state, action) {
      state.message = action.payload.message;
      state.isOpen = true;
    },
    closeSnackbar(state) {
      state.isOpen = false;
    },
  },
});

export const snackbarSliceActions = snackbarSlice.actions;
export default snackbarSlice.reducer;
