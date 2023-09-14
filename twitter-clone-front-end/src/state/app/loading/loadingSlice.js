import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDialogLoading: false,
};

const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    setIsDialogLoading(state, action) {
      state.isDialogLoading = action.payload;
    },
  },
});

export const loadingSliceActions = loadingSlice.actions;
export default loadingSlice.reducer;
