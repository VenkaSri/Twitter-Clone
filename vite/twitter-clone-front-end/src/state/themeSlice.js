import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  currentColor: "#1e9bf0",
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    setDarkMore(state, action) {
      state.darkMode = action.payload;
    },
    setCurrentColor(state, action) {
      state.currentColor = action.payload;
    },
  },
});

export const themeSliceActions = themeSlice.actions;
export default themeSlice.reducer;
