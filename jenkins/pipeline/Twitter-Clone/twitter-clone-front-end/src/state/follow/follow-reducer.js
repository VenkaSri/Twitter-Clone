import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFollowing: false,
  
}

const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {
    setIsFollowing(state, action) {
      state.isFollowing = action.payload;
    }
  }
})


export const followActions = followSlice.actions;
export default followSlice.reducer;