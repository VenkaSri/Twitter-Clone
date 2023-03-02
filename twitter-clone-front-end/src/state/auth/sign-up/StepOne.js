import { createSlice } from "@reduxjs/toolkit";

const initialNameState = { name: ""};

const nameSlice = createSlice({
  name: "user's name",
  initialState: initialNameState,
  reducers: {
    assignName(state, action) {
      state.name = action.payload;
    }
  }
})

export const nameActions = nameSlice.actions;
export default nameSlice.reducer;