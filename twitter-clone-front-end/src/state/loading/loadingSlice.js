import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialAppLoaded: false,
  fetchedPrincipleUserDetails: false,
};

const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    setFetchedPrincipleUserDetails(state, action) {
      state.fetchedPrincipleUserDetails = action.payload;
    },
    setInitialAppLoaded(state, action) {
      state.initialAppLoaded = action.payload;
    },
  },
});

export const loadingSliceActions = loadingSlice.actions;
export default loadingSlice.reducer;
