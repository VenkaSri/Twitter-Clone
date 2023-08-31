import React from "react";
import { PASSWORD_STEP } from "../../../constants";

export const ContentHeading = ({ currentStep }) => {
  const currentHeader = () => {
    switch (currentStep) {
      case 1:
        return "Create your account";
      case 2:
        return "Create your account";
      case 3:
        return "You'll need a password";
      default:
        break;
    }
  };

  return (
    <div className="flex-col-container">
      <div className="flex-col-container my-5">
        <h1 className="text-[26px] leading-8 font-cMed font-bold break-words inline">
          <span>{currentHeader()}</span>
          {currentStep === PASSWORD_STEP && (
            <div className="text-[15px] leading-8 font-cReg break-words ">
              <span>Make sure it's 8 characters or more</span>
            </div>
          )}
        </h1>
      </div>
    </div>
  );
};
