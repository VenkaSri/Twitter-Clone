import React from "react";
import NameInputField from "../inputs/NameInputField";
import EmailTextField from "../inputs/EmailTextField";
import { InfoLabel } from "../../../InfoLabel";
import DOBInput from "../inputs/DOBInput";
import { DialogBodyContainer } from "../../DialogBodyContainer";
import { DialogContentHeading } from "../DialogContentHeading";

export const StepOneBody = () => {
  return (
    <DialogBodyContainer>
      <DialogContentHeading text="Create your account" />
      <div className="flex-col-container py-3">
        <NameInputField />
      </div>
      <div className="flex-col-container py-3">
        <EmailTextField />
      </div>
      <div className="text-[#1d9bf0] text-right font-normal text-[15px] font-cReg leading-5 ">
        <span className="hover:underline cursor-pointer">
          Use phone instead
        </span>
      </div>
      <div className="flex-col-container mt-5">
        <InfoLabel
          text={"Date of birth"}
          style={{
            fontSize: 15,
            lineHeight: 20,
            fontFamily: "cReg",
            marginB: 8,
            weight: "700",
            color: "text-black dark:text-white",
          }}
        />
        <InfoLabel
          style={{
            fontSize: 14,
            lineHeight: 16,
            fontFamily: "cThin",
            marginB: 4,
            weight: "400",
            color: "text-[#71767b] dark:text-[#71767b]",
          }}
          text={
            "This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else."
          }
        />
        <div className="flex-col-container">
          <DOBInput />
        </div>
      </div>
    </DialogBodyContainer>
  );
};
