import React from "react";
import FinalStepFooter from "../../signup/dialog/FinaStepFooter";


const DialogFooter = ({ currentStep }) => {
  switch (currentStep) {
    case 5:
      return <FinalStepFooter />;
    default:
      return null;
  }
};

export default DialogFooter;
