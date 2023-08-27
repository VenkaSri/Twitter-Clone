import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { resetActions } from "../../../state/auth/sign-up/reset-reducer";
import { stepsActions } from "../../../state/auth/form/steps-reducer";
import SVG from "../../UI/app/SVG";
import { DialogTitle } from "@mui/material";
import { unfollowDialogActions } from "../../../state/dialog/dialogState-reducer";
import IconButton from "../../UI/button/IconButton";
import getIcon from "../../UI/icons/iconsutil";
import {
  LOGO,
  FORM_BACK_BUTTON,
  CLOSE,
} from "../../../utils/ButtonLinkObjects";
import { Link } from "react-router-dom";

const DialogHeader = () => {
  const loading = useSelector((state) => state.rootReducer.signUp.api.loading);
  const dispatch = useDispatch();
  const currentStep = useSelector(
    (state) => state.rootReducer.signUp.steps.currentStep
  );
  const dialogState = useSelector(
    (state) => state.rootReducer.dialogState.isDialogOpen
  );
  const handleReset = () => {
    dispatch(resetActions.resetAll());
    dispatch(unfollowDialogActions.setDialogState(false));
    window.history.replaceState(null, null, "/");
  };

  const handleBack = () => {
    dispatch(stepsActions.setCurrentStep(currentStep - 1));
  };
  return (
    <div className="h-[53px] flex">
      <div className="flex items-center sticky top-0 bg-[#fff] mx-[51px] px-[16px] w-full justify-center align-center">
        <div className="min-w-[56px] min-h-[32px] self-stretch flex items-start justify-center flex-col">
          <div className="min-w-[36px] min-h-[36px] rounded-full flex flex-col cursor-pointer items-center justify-center">
            <IconButton
              type={"Close"}
              options={{
                fillColor: "#0f1419",
                width: 20,
                height: 20,
                hovBgColor: "#e7e7e8",
              }}
            />
          </div>
        </div>
        <div className="flex flex-grow h-full justify-center items-stretch flex-col">
          <div className="flex flex-col items-start shrink-0 ">
            <h2 className="py-0.5 text-xl leading-6 font-cMed font-bold">
              <span>Step 1 of 5</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogHeader;
