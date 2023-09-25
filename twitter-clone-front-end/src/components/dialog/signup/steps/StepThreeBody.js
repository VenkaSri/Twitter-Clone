import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { DialogContentHeading } from "../../../DialogContentHeading";
import { CustomTextField } from "../../../CustomTextField";
import { usePasswordInputState } from "../../../../hooks/signup/usePasswordInputState";
import { DialogBodyContainer } from "../../DialogBodyContainer";

export const StepThreeBody = () => {
  const fullScreen = useMediaQuery("(max-width:702px)");
  const {
    password,
    setHasUserEnteredValue,
    handlePasswordInputChange,
    errorMessage,
    isPasswordStrengthValidState,
    isPasswordLengthValidState,
  } = usePasswordInputState();

  const handleInputChange = (value) => {
    handlePasswordInputChange(value);
    setHasUserEnteredValue(true);
  };

  return (
    <DialogBodyContainer>
      <DialogContentHeading
        text="You'll need a password"
        subtext={"Make sure it's 8 characters or more."}
      />
      <div className="flex-col-container pt-3">
        <CustomTextField
          label="Password"
          icon={{ end: "Reveal" }}
          inputValue={password}
          onInputChange={handleInputChange}
          error={isPasswordLengthValidState || isPasswordStrengthValidState}
        />
        <div className="flex">
          <div className="pt-0.5 pr-5 flex flex-col">
            {errorMessage && (
              <p className="font-cReg text-[14px] ml-2 text-[#f1202d]">
                {isPasswordStrengthValidState
                  ? "Please enter a stronger password."
                  : "Your password needs to be at least 8 characters. Please enter a longer one"}
              </p>
            )}
          </div>
        </div>
      </div>
    </DialogBodyContainer>
  );
};
