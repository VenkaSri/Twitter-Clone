import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    setDarkMore(state, action) {
      state.darkMode = action.payload;
    },
  },
});

export const themeSliceActions = themeSlice.actions;
export default themeSlice.reducer;
