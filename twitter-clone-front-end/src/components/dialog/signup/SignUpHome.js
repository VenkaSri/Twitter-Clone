import React from "react";

import { useSelector } from "react-redux";
import { StepOneBody } from "./steps/1/StepOneBody";
import { DialogBodyContainer } from "../../DialogBodyContainer";

const SignUpHome = () => {
  const currentStep = useSelector(
    (state) => state.rootReducer.signUp.steps.currentStep
  );

  let currentBody = <StepOneBody />;

  return (
    <>
      <DialogBodyContainer>{currentBody}</DialogBodyContainer>
    </>
  );
};

export default SignUpHome;
