import { createSlice } from "@reduxjs/toolkit";
import { store } from "@/store";

const prefersDarkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

const initialState = {
  darkMode: prefersDarkModeQuery.matches,
  currentColor: "#1e9bf0",
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    setDarkMode(state, action) {
      state.darkMode = action.payload;
    },
    setCurrentColor(state, action) {
      state.currentColor = action.payload;
    },
  },
});

prefersDarkModeQuery.addEventListener("change", (e) => {
  store.dispatch(themeSlice.actions.setDarkMode(e.matches));
});

export const themeSliceActions = themeSlice.actions;
export default themeSlice.reducer;
