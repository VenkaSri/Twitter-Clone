import CustomTextField from "@/components/CustomTextField";
import CustomTextFieldWithIcon from "@/components/CustomTextFieldWithIcon";
import { Visibility, VisibilityOff } from "@/components/icons/Icons";
import { RegisterContext } from "@/context/auth/register-context";
import { useInputValidation } from "@/hooks/inputs/useInputValidation";
import ErrorField from "@components/auth/ErrorField";
import DialogContentHeading from "@components/dialog/body/DialogBodyHeading";

import { useContext, useState } from "react";

const StepThree = () => {
  const { setName, nameError, setEmail, emailError, emailErrorMessage } =
    useInputValidation();
  const { setPassword, password } = useContext(RegisterContext);
  console.log(password);
  return (
    <>
      <DialogContentHeading
        text="You'll need a password"
        subtext="Make sure it's 8 characters or more."
      />
      <div className="flex-col-container py-3">
        <div className="flex flex-col grow ">
          <CustomTextField
            label="Password"
            maxLength={50}
            onChange={setPassword}
            hasError={nameError}
          />
          {nameError && <ErrorField errorMessage="What’s your name?" />}
        </div>
      </div>
    </>
  );
};

export default StepThree;
