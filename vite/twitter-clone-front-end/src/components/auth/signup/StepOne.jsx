import DialogBodyContainer from "@components/dialog/DialogBodyContainer";
import PropTypes from "prop-types";
import CustomTextField from "@/components/CustomTextField";
import { useInputValidation } from "@/hooks/inputs/useInputValidation";
import ErrorField from "@components/auth/ErrorField";
import DOBInput from "./dob/DOBInput";

export const StepOne = () => {
  const { setName, nameError, setEmail, emailError, emailErrorMessage } =
    useInputValidation();

  return (
    <DialogBodyContainer>
      <DialogContentHeading text="Create your account" />
      <div className="flex-col-container py-3">
        <div className="flex flex-col grow ">
          <CustomTextField
            label="Name"
            maxLength={50}
            onChange={setName}
            hasError={nameError}
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
    </DialogBodyContainer>
  );
};

const DialogContentHeading = ({ text, subtext }) => {
  return (
    <div className="flex-col-container ">
      <div className="flex-col-container my-5">
        <h1 className="text-[31px] leading-8 font-cBold break-words inline dark:text-[#fff]">
          <span>{text}</span>
        </h1>
        {subtext && (
          <div className="flex-col-container mt-2">
            <div className="text-[15px] leading-5 font-cReg break-words text-[#536471] dark:text-[#536471] ">
              <span>{subtext}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

DialogContentHeading.propTypes = {
  text: PropTypes.string,
  subtext: PropTypes.string,
};
