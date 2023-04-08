import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { resetActions } from "../../../state/auth/sign-up/reset-reducer";
import { stepsActions } from "../../../state/auth/form/steps-reducer";
import SVG from "../../UI/app/SVG";
import { DialogTitle } from "@mui/material";
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
  const handleReset = () => {
    dispatch(resetActions.resetAll());
  };

  const handleBack = () => {
    dispatch(stepsActions.setCurrentStep(currentStep - 1));
  };
  return (
      <div className="w-full flex justify-center align-items">
        <div className="flex p-[0.75rem] w-[50px] hover:bg-[#E8F5FE] rounded-full fill-[#1D9BF0] group-hover:bg-[#E6E7E7]">
          <SVG svgPath={LOGO} />
        </div>
      </div>
  );
};

export default DialogHeader;
