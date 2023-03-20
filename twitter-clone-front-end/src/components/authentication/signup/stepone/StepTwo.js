import React from "react";
import { useSelector } from "react-redux";

import InputField from "../../../UI/form/InputField";
import { CONFIRMED_CHECKMARK } from "../../../../utils/ButtonLinkObjects";
import moment from "moment";

const StepTwo = () => {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const dob = useSelector((state) => state.dob);
  const userDob = `${dob.month}-${dob.day}-${dob.year}`;
  return (
    <div className="h-full min-h-[440px] px-[5rem] overflow-auto">
      <h1 className="font-cBold text-[2rem]">Create your account</h1>
      <div className="flex flex-col gap-[25px] mt-6">
        <InputField label="Name" inputValue={name.name} svg={{path: CONFIRMED_CHECKMARK, style: "w-5 fill-[#00BA7C] mt-4"}}/>
        <InputField label="Email" inputValue={email.enteredEmail} svg={{path: CONFIRMED_CHECKMARK, style: "w-5 fill-[#00BA7C] mt-4"}}/>
        <InputField
          label="Date of Birth"
          inputValue={(moment(userDob, "MMMM DD, YYYY").format("MMM DD, YYYY"))}
          svg={{path: CONFIRMED_CHECKMARK, style: "w-5 fill-[#00BA7C] mt-4"}}/>
      </div>
      <div className="mt-20">
        <p className="text-[13px] font-cLight text-[#536471] leading-none">
          By signing up, you agree to the <span className="text-[#1D9BF0]">Terms of Service</span> and <span className="text-[#1D9BF0]">Privay Policy</span>,
          including <span className="text-[#1D9BF0]">Cookie use</span>. Twitter may use your contact information,
          including your email address and phone number for purposes outlined in
          our Privacy Policy, like keeping your account secure and personalizing
          our services, including ads. <span className="text-[#1D9BF0]">Learn more</span>. Others will be able to find
          you by email or phone number, when provided, unless you choose
          otherwise <span className="text-[#1D9BF0]">here</span>.
        </p>
      </div>
    </div>
  );
};

export default StepTwo;
