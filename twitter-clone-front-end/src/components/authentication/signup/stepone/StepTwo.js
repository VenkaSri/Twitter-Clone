import React from "react";
import { useSelector } from "react-redux";

import InputField from "../../../UI/form/InputField";
import moment from "moment";

const StepTwo = () => {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const dob = useSelector((state) => state.dob);
  console.log(dob.day)
  const userDob = `${dob.month} ${dob.day}, ${dob.year}`;
  return (
    <div className="h-full min-h-[440px] px-[5rem] overflow-auto">
      <h1 className="font-cBold text-[2rem]">Create your account</h1>
      <div className="flex flex-col gap-[25px] mt-6">
        <InputField label="Name" inputValue={name.name} />
        <InputField label="Email" inputValue={email.enteredEmail} />
        <InputField
          label="Date of Birth"
          inputValue={moment(userDob).format("MMM D, YYYY")}
        />
      </div>
      <div className="mt-10">
        <h3 className="font-cBold">Date of birth</h3>
        <p className="text-[14px] font-cReg text-[#536471] mt-2">
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use. Twitter may use your contact information,
          including your email address and phone number for purposes outlined in
          our Privacy Policy, like keeping your account secure and personalizing
          our services, including ads. Learn more. Others will be able to find
          you by email or phone number, when provided, unless you choose
          otherwise here.
        </p>
      </div>
    </div>
  );
};

export default StepTwo;
