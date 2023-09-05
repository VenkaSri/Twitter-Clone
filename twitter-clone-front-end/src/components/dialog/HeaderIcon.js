import React from "react";

import { FIRST_STEP } from "../../constants";
import IconButton from "../UI/button/IconButton";

export const HeaderIcon = ({ currentStep, handleReset, handleBack }) => {
  if (currentStep <= FIRST_STEP) {
    return (
      <IconButton
        onClick={handleReset}
        type={"Close"}
        options={{
          className:
            "dark:fill-white dark:hover:bg-[#191919] hover:bg-[#E6E7E7] ",
          width: 20,
          height: 20,
        }}
      />
    );
  } else {
    return (
      <IconButton
        onClick={handleBack}
        type={"Back"}
        options={{
          width: 20,
          height: 20,
          className:
            "dark:fill-white dark:hover:bg-[#191919] hover:bg-[#E6E7E7] ",
        }}
      />
    );
  }
};
