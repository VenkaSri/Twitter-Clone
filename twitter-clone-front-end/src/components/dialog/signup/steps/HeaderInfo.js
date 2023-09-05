import React from "react";
import { NUM_OF_SIGNUP_STEPS } from "../../../../constants";

export const HeaderInfo = ({ currentStep }) => {
  return (
    <h2 className="py-0.5 text-xl leading-6 font-cMed font-bold dark:text-[#fff]">
      <span>
        Step {currentStep} of {NUM_OF_SIGNUP_STEPS}
      </span>
    </h2>
  );
};
