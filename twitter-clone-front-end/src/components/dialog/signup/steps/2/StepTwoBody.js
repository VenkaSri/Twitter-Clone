import React from "react";
import { useSelector } from "react-redux";

import InputField from "../../../../UI/form/InputField";
import { CONFIRMED_CHECKMARK } from "../../../../../utils/ButtonLinkObjects";
import moment from "moment";

const StepTwoBody = () => {
  const stepOneUserInfo = useSelector(
    (state) => state.rootReducer.signUpState.stepOneInfo
  );

  return (
    <>
      <InputField
        label="Name"
        inputValue={stepOneUserInfo.name}
        svg={{ path: CONFIRMED_CHECKMARK, style: "w-5 fill-[#00BA7C] mt-4" }}
      />

      <InputField
        label="Email"
        inputValue={stepOneUserInfo.email}
        svg={{ path: CONFIRMED_CHECKMARK, style: "w-5 fill-[#00BA7C] mt-4" }}
      />
      <InputField
        label="Date of Birth"
        inputValue={moment(stepOneUserInfo.dob, "YYYY-MM-DD").format(
          "MMM DD, YYYY"
        )}
        svg={{ path: CONFIRMED_CHECKMARK, style: "w-5 fill-[#00BA7C] mt-4" }}
      />
    </>
  );
};

export default StepTwoBody;
