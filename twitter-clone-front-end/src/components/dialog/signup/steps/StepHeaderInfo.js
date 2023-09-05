import React from "react";

import { NUM_OF_SIGNUP_STEPS } from "../../../../constants";

export const StepHeaderInfo = ({ currentStep }) => {
  return (
    <>
      <div className="flex flex-grow h-full justify-center items-stretch flex-col">
        <div className="flex flex-col items-start shrink-0 ">
          <h2 className="py-0.5 text-xl leading-6 font-cMed font-bold dark:text-[#fff]">
            <span>
              Step {currentStep} of {NUM_OF_SIGNUP_STEPS}
            </span>
          </h2>
        </div>
      </div>
    </>
  );
};
