import React from "react";

import { StepTwoFooter } from "./steps/2/StepTwoFooter";
import { StepOneFooter } from "./steps/1/StepOneFooter";
import { StepThreeFooter } from "./steps/3/StepThreeFooter";
import { useCurrentStep } from "../../../hooks/signup/ useCurrentStep";

export const SignupFooter = () => {
  const currentStep = useCurrentStep();

  let content = null;

  switch (currentStep) {
    case 1:
      content = <StepOneFooter />;
      break;
    case 2:
      content = <StepTwoFooter />;
      break;
    case 3:
      content = <StepThreeFooter />;
      break;
    default:
      break;
  }

  return <div className="flex-col-container">{content}</div>;
};
