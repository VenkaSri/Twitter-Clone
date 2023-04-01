import { createSlice } from "@reduxjs/toolkit";
import { resetActions } from "../sign-up/reset-reducer";

const initialState = {
  loading: true,
};

const apiSlice = createSlice({
  name: "registerApi",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
      console.log(state.loading);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetActions.resetAll, () => initialState);
  },
});

export const apiActions = apiSlice.actions;
export default apiSlice.reducer;
