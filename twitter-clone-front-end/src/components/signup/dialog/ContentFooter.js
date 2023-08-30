import React from "react";

import { useMediaQuery } from "@mui/material";
import { StepOneFooter } from "../../dialog/signup/steps/1/StepOneFooter";
import { StepTwoFooter } from "../../dialog/signup/steps/2/StepTwoFooter";

export const ContentFooter = ({ currentStep, isOverflowing }) => {
  const fullScreen = useMediaQuery("(max-width:702px)");
  const currentFooter = () => {
    switch (currentStep) {
      case 1:
        return <StepOneFooter />;
      case 2:
        return <StepTwoFooter />;
      default:
        break;
    }
  };
  const overflowClass = isOverflowing ? "shadow-custom-shadow" : "";
  return (
    <div
      className={`flex-col-container ${
        fullScreen ? "px-8" : "px-20"
      } ${overflowClass}`}
    >
      <div className="flex-col-container ">
        <div
          className={`flex-col-container min-h-[52px] min-w-[52px] rounded-full `}
        >
          <div className="my-6 flex-col-container flex-grow  ">
            <div className="flex-col-container min-h-[52px] min-w-[52px]">
              {currentFooter()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
