import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { stepsActions } from "../../../state/auth/form/steps-reducer";

const StepsFooter = () => {
  const dispatch = useDispatch();
  const nextStepHandler = () => {
    dispatch(stepsActions.setStepTwo(true));
  };
  const stepOne = useSelector((state) => state.stepOne);
  const submitButtonClasses =
    stepOne.isEmailEntered && stepOne.isNameEntered && stepOne.isDOBEntered
      ? "w-[440px] h-[52px] font-cBold text-[#fff] rounded-full bg-[#000]"
      : "w-[440px] h-[52px] font-cBold text-[#fff] rounded-full bg-[#86888b]";

  const disable =
    stepOne.isEmailEntered && stepOne.isNameEntered && stepOne.isDOBEntered
      ? false
      : true;
  return (
      <div className="h-[100px] max-h-[100px] bg-[#fff] flex items-center justify-center sticky bottom-0 z-50 grow">
        <button
          className={submitButtonClasses}
          disabled={disable}
          onClick={nextStepHandler}
        >
          Next
        </button>
      </div>

  );
};

export default StepsFooter;
