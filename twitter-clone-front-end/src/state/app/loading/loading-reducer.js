import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPageLoaded: false,
};

const loadingReducerInfo = createSlice({
  name: "loadingReducerInfo",
  initialState,
  reducers: {
    setIsPageLoaded(state, action) {
      state.isPageLoaded = action.payload;
    },
  },
});

export const loadingReducerInfoActions = loadingReducerInfo.actions;
export default loadingReducerInfo.reducer;
