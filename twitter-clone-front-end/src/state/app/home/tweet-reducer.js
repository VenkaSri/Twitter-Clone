import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPostFieldClicked: false,
  showButtons: false,
};

const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    isPostFieldClicked(state, action) {
      state.isPostFieldClicked = action.payload;
    },
    showButtons(state, action) {
      state.showButtons = action.payload;
    },
  },
});

export const tweetActions = tweetSlice.actions;
export default tweetSlice.reducer;
