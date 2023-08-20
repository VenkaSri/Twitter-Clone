import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPostFieldClicked: false,
  isFieldEmpty: false,
  currentNumberOfCharacters: 0,
};

const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    isPostFieldClicked(state, action) {
      state.isPostFieldClicked = action.payload;
    },
    updateFieldState(state, action) {
      state.isFieldEmpty = action.payload;
    },
    setNumOfChars(state, action) {
      state.currentNumberOfCharacters = action.payload;
    },
  },
});

export const tweetActions = tweetSlice.actions;
export default tweetSlice.reducer;
