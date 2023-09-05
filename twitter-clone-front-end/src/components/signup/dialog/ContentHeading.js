import React from "react";
import { PASSWORD_STEP } from "../../../constants";

export const ContentHeading = ({ currentStep }) => {
  const currentHeader = () => {
    switch (currentStep) {
      case 1:
        return {
          heading: "Create your account",
        };
      case 2:
        return "Create your account";
      case 3:
        return {
          heading: "You'll need a password",
          subheading: "Have a favorite selfie? Upload it now.",
        };
      case 4:
        return {
          heading: "Pick a profile picture",
          subheading: "Have a favorite selfie? Upload it now.",
        };
      default:
        break;
    }
  };

  return (
    <div className="flex-col-container ">
      {currentStep === 4.5 ? null : (
        <div className="flex-col-container my-5">
          <h1 className="text-[31px] leading-8 font-cMed font-bold break-words inline dark:text-[#fff]">
            <span>{currentHeader().heading}</span>
          </h1>
          {currentStep >= PASSWORD_STEP && (
            <div className="flex-col-container mt-2">
              <div className="text-[15px] leading-5 font-cThin break-words text-[#536471] dark:text-[#536471] ">
                <span>{currentHeader().subheading}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
