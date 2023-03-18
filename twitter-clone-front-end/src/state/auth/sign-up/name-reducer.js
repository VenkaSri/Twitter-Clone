import { createSlice } from "@reduxjs/toolkit";
import { resetActions } from "./reset-reducer";

const nameInitialState = {
  name: "",
  isNameValid: false,
  hasEnteredInput: false,
  shouldAutoFocus: false
};

const nameSlice = createSlice({
  name: "name",
  initialState: nameInitialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setNameValidity(state, action) {
      state.isNameValid = action.payload;
    },
    setHasEnteredInput(state, action) {
      state.hasEnteredInput = action.payload;
    },
    setAutoFocus(state, action) {
      state.shouldAutoFocus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetActions.resetAll, () => nameInitialState);
  }
});

export const nameActions = nameSlice.actions;
export default nameSlice.reducer;
