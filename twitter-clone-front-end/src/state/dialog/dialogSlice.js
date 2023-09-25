import { createSlice } from "@reduxjs/toolkit";
import { dialogStepsConfig } from "../../config/dialogConfig";

const initialState = {
  // dialogHeaderContent: null,
  // dialogBodyContent: null,
  // dialogFooterContent: null,
  // dialogHeaderContent: <StepHeader heading="Step 2 of 3" withIcon />,
  // dialogBodyContent: <StepThreeBody />,
  // dialogFooterContent: <DialogFooterContent step={3} />,
  isDialogOpen: false,
  isACutomBody: false,
  dialogBodyOverFlowing: false,
  isDialogContentLoaded: false,
  endOfScroll: false,
};

const dialogSlice = createSlice({
  name: "dialogSlice",
  initialState,
  reducers: {
    setDialogContent(state, action) {
      const { header, body, footer } = dialogStepsConfig[action.payload];
      state.dialogHeaderContent = header;
      state.dialogBodyContent = body;
      state.dialogFooterContent = footer;
    },
    setIsDialogOpen(state, action) {
      state.isDialogOpen = action.payload;
    },
    setDialogBodyOverFlowing(state, action) {
      state.dialogBodyOverFlowing = action.payload;
    },
    setIsDialogContentLoaded(state, action) {
      state.isDialogContentLoaded = action.payload;
    },
    setEndOfScroll(state, action) {
      state.endOfScroll = action.payload;
    },
  },
});

export const dialogSliceActions = dialogSlice.actions;
export default dialogSlice.reducer;
