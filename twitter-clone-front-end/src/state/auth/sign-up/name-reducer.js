import { createSlice } from "@reduxjs/toolkit";

const nameInitialState = {
  name: "", 
  isNameValid: false,
  hasEnteredInput: false
}


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
    }

  }
});



export const nameActions = nameSlice.actions;
export default nameSlice.reducer;