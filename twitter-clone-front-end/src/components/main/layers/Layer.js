import React from "react";
import { useSelector } from "react-redux";

import LandingFooter from "../../footer/LandingFooter";
import FormDialog from "../../UI/home/FormDialog";
import { Route, Routes } from "react-router-dom";
import StepOne from "../../authentication/signup/stepone/StepOne";
import StepsHeader from "../../authentication/signup/StepsHeader";
import StepsFooter from "../../authentication/signup/StepsFooter";
import StepTwo from "../../authentication/signup/stepone/StepTwo";
import FinalStep from "../../authentication/signup/FinalStep";
import ProfilePicture from "../../authentication/signup/ProfilePicture";

const stepsContent = [<StepOne />, <StepTwo />, <FinalStep />, <ProfilePicture />]

const Layer = () => {
  const currentStep = useSelector(state => state.rootReducer.signUp.steps.currentStep);

  return (
    <div className="relative flex flex-col justify-center grow">
      <Routes>
        <Route
          path="/"
          element={null}
          onEnter={() => console.log("hello")}
        />
        <Route
          path="/i/flow/signup"
          element={
            <FormDialog
            steps={stepsContent[currentStep - 1]} 
              header={<StepsHeader />}
              footer={<StepsFooter />}
            />
          }
        />
      </Routes>
      {currentStep === 4 ? null : <LandingFooter /> }
    </div>
  );
};

export default Layer;

