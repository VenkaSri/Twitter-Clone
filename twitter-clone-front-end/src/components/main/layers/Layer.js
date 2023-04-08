import React from "react";
import { useSelector } from "react-redux";

import LandingFooter from "../../footer/LandingFooter";
import FormDialog from "../../UI/home/FormDialog";
import { Route, Routes } from "react-router-dom";
import StepOne from "../../signup/stepone/StepOne";
import StepsHeader from "../../signup/StepsHeader";
import StepsFooter from "../../signup/StepsFooter";
import StepTwo from "../../signup/stepone/StepTwo";
import PasswordStep from "../../signup/PasswordStep";
import ProfilePicture from "../../signup/ProfilePicture";
import Username from "../../signup/Username";
import { FinalStep } from "../../signup/FinalStep";
import SignUpStep from "../../SignUpStep";
import DialogHeader from "../../signup/dialog/DialogHeader";
import DialogFooter from "../../UI/dialog/DialogFooter";

const stepsContent = [
  <StepOne />,
  <StepTwo />,
  <PasswordStep />,
  <Username />,
  <FinalStep />,
];
//<ProfilePicture />

const Layer = () => {
  const currentStep = useSelector(
    (state) => state.rootReducer.signUp.steps.currentStep
  );
  const isUserAuthenticated = useSelector(
    (state) => state.rootReducer.userInfo.isAuthenticated
  );
  return (
    <div className="relative flex flex-col justify-center grow">
      <Routes>
        <Route path="/" element={null} onEnter={() => console.log("hello")} />
        <Route
          path="/i/flow/signup"
          element={
            <FormDialog
              content={
                <SignUpStep
                  header={<DialogHeader />}
                  content={<FinalStep />}
                  footer={<DialogFooter currentStep={currentStep}/>}
                />
              }
            />
          }
        />
      </Routes>
      {isUserAuthenticated ? null : <LandingFooter />}
    </div>
  );
};

export default Layer;
