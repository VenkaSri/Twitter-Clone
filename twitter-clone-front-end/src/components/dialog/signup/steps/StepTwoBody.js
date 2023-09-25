import React from "react";
import { useSelector } from "react-redux";

import InputField from "../../../UI/form/InputField";
import { CONFIRMED_CHECKMARK } from "../../../../utils/ButtonLinkObjects";
import moment from "moment";
import { DialogContentHeading } from "../../../DialogContentHeading";
import { DialogBodyContainer } from "../../DialogBodyContainer";

const StepTwoBody = () => {
  const stepOneInfo = useSelector(
    (state) => state.rootReducer.signUpState.stepOneInfo
  );
  const userDob = `${stepOneInfo.dob.month}-${stepOneInfo.dob.day}-${stepOneInfo.dob.year}`;

  return (
    <DialogBodyContainer>
      <DialogContentHeading text="Create your account" />
      <InputField
        label="Name"
        inputValue={stepOneInfo.name}
        svg={{ path: CONFIRMED_CHECKMARK, style: "w-5 fill-[#00BA7C] mt-4" }}
      />

      <InputField
        label="Email"
        inputValue={stepOneInfo.email}
        svg={{ path: CONFIRMED_CHECKMARK, style: "w-5 fill-[#00BA7C] mt-4" }}
      />
      <InputField
        label="Date of Birth"
        inputValue={moment(userDob, "MMMM DD, YYYY").format("MMM DD, YYYY")}
        svg={{ path: CONFIRMED_CHECKMARK, style: "w-5 fill-[#00BA7C] mt-4" }}
      />
    </DialogBodyContainer>
  );
};

export default StepTwoBody;
