import React from "react";
import { useSelector } from "react-redux";

import InputField from "../../../../UI/form/InputField";
import { CONFIRMED_CHECKMARK } from "../../../../../utils/ButtonLinkObjects";
import moment from "moment";

const StepTwoBody = () => {
  const { name, email, dob } = useSelector((state) => state.rootReducer.signUp);
  const userDob = `${dob.month}-${dob.day}-${dob.year}`;

  return (
    <>
      <InputField
        label="Name"
        inputValue={name.name}
        svg={{ path: CONFIRMED_CHECKMARK, style: "w-5 fill-[#00BA7C] mt-4" }}
      />

      <InputField
        label="Email"
        inputValue={email.enteredEmail}
        svg={{ path: CONFIRMED_CHECKMARK, style: "w-5 fill-[#00BA7C] mt-4" }}
      />
      <InputField
        label="Date of Birth"
        inputValue={moment(userDob, "MMMM DD, YYYY").format("MMM DD, YYYY")}
        svg={{ path: CONFIRMED_CHECKMARK, style: "w-5 fill-[#00BA7C] mt-4" }}
      />
    </>
  );
};

export default StepTwoBody;
