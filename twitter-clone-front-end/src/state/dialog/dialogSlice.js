import { createSlice } from "@reduxjs/toolkit";
import { UploadProfilePictureStep } from "../../components/dialog/signup/steps/profile_picture/UploadProfilePictureStep";
import { StepThreeFooter } from "../../components/dialog/signup/steps/3/StepThreeFooter";
import { dialogStepsConfig } from "../../config/dialogConfig";
import { DialogFooterContent } from "../../components/dialog/footer/DialogFooterContent";
import { UsernameStep } from "../../components/dialog/signup/steps/username/UsernameStep";
import { DialogHeaderContent } from "../../components/dialog/header/DialogHeaderContent";
import { StepOneBody } from "../../components/dialog/signup/steps/1/StepOneBody";
import { DialogHeaderLogo } from "../../components/dialog/header/DialogHeaderLogo";
import FinalStep from "../../components/signup/FinalStep";
import { StepHeader } from "../../components/dialog/signup/steps/StepHeader";
import StepTwoBody from "../../components/dialog/signup/steps/2/StepTwoBody";
import { StepThreeBody } from "../../components/dialog/signup/steps/3/StepThreeBody";

const initialState = {
  // dialogHeaderContent: null,
  // dialogBodyContent: null,
  // dialogFooterContent: null,
  dialogHeaderContent: <StepHeader heading="Step 2 of 3" withIcon />,
  dialogBodyContent: <StepThreeBody />,
  dialogFooterContent: <DialogFooterContent step={3} />,
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
