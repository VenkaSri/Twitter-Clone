import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isRegistrationComplete: false,
};

const reducerInfo = createSlice({
  name: "reducerInfo",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setRegistrationComplete(state, action) {
      console.log("yes");
      state.isRegistrationComplete = action.payload;
    },
  },
});

export const reducerInfoActions = reducerInfo.actions;
export default reducerInfo.reducer;
