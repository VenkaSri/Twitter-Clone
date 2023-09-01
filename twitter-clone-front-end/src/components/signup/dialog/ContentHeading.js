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
    <div className="flex-col-container ">
      <div className="flex-col-container my-5">
        <h1 className="text-[26px] leading-8 font-cMed font-bold break-words inline dark:text-[#fff]">
          <span>{currentHeader()}</span>
        </h1>
        {currentStep === PASSWORD_STEP && (
          <div className="flex-col-container mt-2">
            <div className="text-[15px] leading-5 font-cThin break-words text-[#536471] dark:text-[#536471] ">
              <span>Make sure it's 8 characters or more.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
