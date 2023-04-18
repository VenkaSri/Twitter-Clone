import React from "react";
import FinalStepFooter from "../../signup/dialog/FinaStepFooter";
import StepOneFooter from "../../signup/StepOneFooter";
import StepTwoFooter from "../../signup/dialog/StepTwoFooter";
import StepThreeFooter from "../../signup/dialog/StepThreeFooter";


const DialogFooter = ({ currentStep }) => {
  switch (currentStep) {
    case 1:
      return <StepOneFooter />;
    case 2:
      return <StepTwoFooter />;
    case 3:
      return <StepThreeFooter />;
    case 5:
      return <FinalStepFooter />;
    default:
      return null;
  }
};

export default DialogFooter;
