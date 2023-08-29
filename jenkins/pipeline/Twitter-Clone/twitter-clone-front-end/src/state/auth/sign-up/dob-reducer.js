import { createSlice } from "@reduxjs/toolkit";
import { resetActions } from "./reset-reducer";

const dobInitialState = {
  month: "",
  day: "",
  year: "",
  isDOBSet: false,
  shouldAutoFocus: false,
}

const dobSlice = createSlice({
  name: "dob",
  initialState: dobInitialState,
  reducers: {
    setMonth(state, action) {
      state.month = action.payload;
    },
    setDay(state, action) {
      state.day = action.payload;
    },
    setYear(state, action) {
      state.year = action.payload;
    },
    isDOBSet(state, action) {
      state.isDOBSet = action.payload;
    },
    setAutoFocus(state, action) {
      state.shouldAutoFocus = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(resetActions.resetAll, () => dobInitialState);
  }
});

export const dobActions = dobSlice.actions;
export default dobSlice.reducer;