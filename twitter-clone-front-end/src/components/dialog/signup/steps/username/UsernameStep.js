import React, { useEffect, useState } from "react";
import { DialogBodyContainer } from "../../../DialogBodyContainer";
import { DialogContentHeading } from "../../../../DialogContentHeading";
import { CustomTextField } from "../../../../CustomTextField";
import { useUsernameInputState } from "../../../../../hooks/signup/useUsernameSetup";
import { signupSliceActions } from "../../../../../state/app/home/signupSlice";
import { useDispatch } from "react-redux";
export const UsernameStep = () => {
  const dispatch = useDispatch();
  const {
    password,
    setHasUserEnteredValue,
    handlePasswordInputChange,
    inputError,
    errorMessage,
    isUsernameLengthValidState,
    isUsernameValidState,
    currentUsername,
    username,
    isUsernameAvailable,
  } = useUsernameInputState();

  const handleInputChange = (value) => {
    handlePasswordInputChange(value);
    setHasUserEnteredValue(true);
  };
  // console.log(errorMessage);

  useEffect(() => {
    dispatch(signupSliceActions.setUsername(username));
  }, []);

  return (
    <DialogBodyContainer>
      <DialogContentHeading
        text="What should be call you?"
        subtext="Your @username is unique. You can always change it later."
      />
      <div className="flex-col-container pt-3">
        <CustomTextField
          label="Username"
          icon={{ start: "@", end: "Confirmed Check" }}
          inputValue={username}
          onInputChange={handleInputChange}
          error={
            isUsernameValidState ||
            isUsernameLengthValidState ||
            isUsernameAvailable
          }
          autoFocus={true}
        />
        <div className="flex">
          <div className="pt-0.5 pr-5 flex flex-col">
            {inputError && (
              <p className="font-cReg text-[14px] ml-2 text-[#f1202d]">
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </DialogBodyContainer>
  );
};
