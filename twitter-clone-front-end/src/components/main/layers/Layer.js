import React from "react";
import { useSelector } from "react-redux";

import LandingFooter from "../../footer/LandingFooter";
import FormDialog from "../../UI/home/FormDialog";
import { Route, Routes } from "react-router-dom";
import StepOne from "../../authentication/signup/stepone/StepOne";
import StepsHeader from "../../authentication/signup/StepsHeader";
import StepsFooter from "../../authentication/signup/StepsFooter";
import StepTwo from "../../authentication/signup/stepone/StepTwo";
import { useDispatch } from "react-redux";
import { resetActions } from "../../../state/auth/sign-up/reset-reducer";

const Layer = () => {
  const steps = useSelector((state) => state.steps);
  const dispatch = useDispatch();
  const stateResetHandler = () => {
    dispatch(resetActions.resetAll());
  };
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
              steps={steps.stepTwo ? <StepTwo /> : <StepOne />}
              header={<StepsHeader />}
              footer={<StepsFooter />}
            />
          }
        />
      </Routes>
      <LandingFooter />
    </div>
  );
};

export default Layer;
