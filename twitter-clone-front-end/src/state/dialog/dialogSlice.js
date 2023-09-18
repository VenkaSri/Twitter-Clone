import { createSlice } from "@reduxjs/toolkit";
import { UploadProfilePictureStep } from "../../components/dialog/signup/steps/profile_picture/UploadProfilePictureStep";
import { StepThreeFooter } from "../../components/dialog/signup/steps/3/StepThreeFooter";
import dialogConfig from "../../config/dialogConfig";
import { DialogFooterContent } from "../../components/dialog/footer/DialogFooterContent";
import { UsernameStep } from "../../components/dialog/signup/steps/username/UsernameStep";

const initialState = {
  dialogHeaderContent: null,
  dialogBodyContent: <UsernameStep />,
  dialogFooterContent: <DialogFooterContent text="Skip for now" />,
  isDialogOpen: false,
  isACutomBody: false,
};

const dialogSlice = createSlice({
  name: "dialogSlice",
  initialState,
  reducers: {
    setDialogHeaderContent(state, action) {
      state.dialogHeaderContent = action.payload;
    },
    setDialogBodyContent(state, action) {
      state.dialogBodyContent = action.payload;
    },
    setDialogFooterContent(state, action) {
      state.dialogFooterContent = action.payload;
    },
    setIsDialogOpen(state, action) {
      state.isDialogOpen = action.payload;
    },
  },
});

export const dialogSliceActions = dialogSlice.actions;
export default dialogSlice.reducer;

export const setDialogContent = (stepKey) => (dispatch) => {
  const { header, body, footer } = dialogConfig[stepKey];
  dispatch(dialogSliceActions.setDialogHeaderContent(header));
  dispatch(dialogSliceActions.setDialogBodyContent(body));
  dispatch(dialogSliceActions.setDialogFooterContent(footer));
};
