import React from "react";
import FinalStepFooter from "../../signup/dialog/FinaStepFooter";
import StepOneFooter from "../../signup/StepOneFooter";


const DialogFooter = ({ currentStep }) => {
  switch (currentStep) {
    case 1:
      return <StepOneFooter />
    case 5:
      return <FinalStepFooter />;
    default:
      return null;
  }
};

export default DialogFooter;
