import CustomTextField from "@/components/CustomTextField";
import { RegisterContext } from "@/context/auth/register-context";
import { useInputValidation } from "@/hooks/inputs/useInputValidation";
import ErrorField from "@components/auth/ErrorField";
import DOBInput from "@components/auth/signup/dob/DOBInput";
import DialogContentHeading from "@components/dialog/body/DialogBodyHeading";
import { useContext } from "react";

const StepOne = () => {
  const { nameError, emailError, emailErrorMessage } = useInputValidation();
  const { name, email, autoFocusField, setEmail, setName } =
    useContext(RegisterContext);

  return (
    <>
      <DialogContentHeading text="Create your account" />
      <div className="flex-col-container py-3">
        <div className="flex flex-col grow ">
          <CustomTextField
            label="Name"
            maxLength={50}
            onChange={setName}
            hasError={nameError}
            defaultValue={name}
            autoFocus={autoFocusField === "name"}
          />
          {nameError && <ErrorField errorMessage="What’s your name?" />}
        </div>
      </div>
      <div className="flex-col-container py-3">
        <div className="flex flex-col grow ">
          <CustomTextField
            label="Email"
            onChange={setEmail}
            hasError={emailError}
            defaultValue={email}
            autoFocus={autoFocusField === "email"}
          />
          {emailError && <ErrorField errorMessage={emailErrorMessage} />}
        </div>
      </div>
      <div className="text-[#1d9bf0] text-right font-normal text-[15px] font-cReg leading-5 ">
        <span className="hover:underline cursor-pointer">
          Use phone instead
        </span>
      </div>
      <div className="flex-col-container mt-5">
        <div className={`font-cBold dark:text-white mb-2 leading-5`}>
          <span className="break-words">Date of Birth</span>
        </div>
        <div className={`font-cR text-[#71767b] text-[14px] mb-2 leading-4`}>
          <span className="break-words">
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </span>
        </div>
        <div className="flex-col-container">
          <DOBInput />
        </div>
      </div>
    </>
  );
};

export default StepOne;
