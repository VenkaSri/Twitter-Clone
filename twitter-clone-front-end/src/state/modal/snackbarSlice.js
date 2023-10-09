import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isError: false,
  errorMessage: "",
  message: "",
};

const snackbarSlice = createSlice({
  name: "snackbarSlice",
  initialState,
  reducers: {
    setIsError(state, action) {
      state.isError = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const snackbarSliceActions = snackbarSlice.actions;
export default snackbarSlice.reducer;
