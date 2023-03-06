import { createSlice } from "@reduxjs/toolkit";

const dobInitialState = {
  month: "",
  day: "",
  year: "",
  isDOBSet: false
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
    }
  }
});

export const dobActions = dobSlice.actions;
export default dobSlice.reducer;