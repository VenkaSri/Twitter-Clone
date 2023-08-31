import React from "react";

import { StepOneBody } from "../../dialog/signup/steps/1/StepOneBody";
import StepTwoBody from "../../dialog/signup/steps/2/StepTwoBody";
import StepThreeBody from "../../dialog/signup/steps/3/StepThreeBody";

export const ContentBody = ({ currentStep }) => {
  const currentBody = () => {
    switch (currentStep) {
      case 1:
        return <StepOneBody />;
      case 2:
        return <StepTwoBody />;
      case 3:
        return <StepThreeBody />;
      default:
        break;
    }
  };

  return <div className="flex-col-container">{currentBody()}</div>;
};
