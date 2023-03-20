import React from "react";

import { Link } from "react-router-dom";
import SVG from "../../UI/app/SVG";
import { CLOSE, FORM_BACK_BUTTON } from "../../../utils/ButtonLinkObjects";
import { useDispatch, useSelector } from "react-redux";
import { resetActions } from "../../../state/auth/sign-up/reset-reducer";
import { stepsActions } from "../../../state/auth/form/steps-reducer";

const StepsHeader = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.steps.currentStep);
  const handleReset = () => {
    dispatch(resetActions.resetAll());
  };

  const handleBack = () => {
    dispatch(stepsActions.setCurrentStep(currentStep - 1));
  };
  return (
    <div className="flex items-center sticky top-0 bg-[#fff] z-50 h-[3.313rem] w-[600px] max-w-[600px]">
      {(currentStep === 1 || currentStep === 2) && (
        <Link
          role="button"
          to={currentStep > 1 ? "/i/flow/signup" : "/"}
          onClick={currentStep > 1 ? handleBack : handleReset}
          className="ml-4 hover:bg-[#E6E7E7] w-[2.125rem] h-[2.125rem] flex items-center justify-center rounded-full cursor-pointer"
        >
          <div className="w-[1.25rem] h-[1.25rem]">
            <SVG svgPath={currentStep > 1 ? FORM_BACK_BUTTON : CLOSE} />
          </div>
        </Link>
      )}
      <span className="ml-6 text-xl font-cBold">Step {currentStep} of 3</span>
    </div>
  );
};

export default StepsHeader;
