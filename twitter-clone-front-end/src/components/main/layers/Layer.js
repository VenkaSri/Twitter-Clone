import React from "react";
import { useSelector } from "react-redux";

import LandingFooter from "../../footer/LandingFooter";
import FormDialog from "../../UI/home/FormDialog";
import SignUpStepTwo from "../../authentication/signup/SignUpStepTwo";
import SignUpStepOne from "../../authentication/signup/SignUpStepOne";
import {  Route, Routes } from "react-router-dom";



const Layer = () => {
  const steps = useSelector((state) => state.steps);
  return (
    <div className="relative flex flex-col justify-center grow">
      <Routes>
        <Route
          path="/i/flow/signup"
          element={
              <FormDialog>
                {(steps.stepTwo) ? <SignUpStepTwo /> : <SignUpStepOne />}
              </FormDialog>
          }
        />
      </Routes>
      <LandingFooter />
    </div>
  );
};

export default Layer;
