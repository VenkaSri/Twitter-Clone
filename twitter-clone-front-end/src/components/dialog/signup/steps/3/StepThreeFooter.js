import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DialogFooterButton } from "../../../../DialogFooterButton";
import { signupSliceActions } from "../../../../../state/app/home/signupSlice";
import { useCurrentStep } from "../../../../../hooks/signup/ useCurrentStep";
import { postData } from "../../../../../services/postData";
import moment from "moment";
import { getData } from "../../../../../services/auth/getData";

export const StepThreeFooter = () => {
  const dispatch = useDispatch();
  const currentStep = useCurrentStep();

  let num = 1;
  const password = useSelector(
    (state) => state.rootReducer.signUpState.password
  );
  const { name, email, dob } = useSelector(
    (state) => state.rootReducer.signUpState.stepOneInfo
  );

  const userDob = moment(
    `${dob.year}-${dob.month}-${dob.day}`,
    "YYYY-MMMM-DD"
  ).format("YYYY-MM-DD");

  const validatePasswordLength = (text) => /^.{8,}$/.test(text);
  const validatePasswordStrength = (text) => /^(.)\1*$/.test(text);

  const styles =
    validatePasswordLength(password) && !validatePasswordStrength(password)
      ? "bg-black dark:bg-white dark:hover:bg-[#D7DBDC] hover:bg-[#272C30]"
      : "bg-[#86888b]";

  const handledNext = async () => {
    if (num === 1) {
      const result = await postData(`/register`, {
        name: "hello",
        dob: "1992-12-23",
        email: "teffffasfdfafasdfdsddfasdfdst@gmail.com",
        password: "safdfasdf",
      });

      console.log(result);
      num++;
    } else {
      const result = await getData("/hello");
      console.log(result);
    }
  };

  return (
    <DialogFooterButton
      text={"Next"}
      className={`${styles} grow text-white font-cBold dark:text-black`}
      onClick={handledNext}
      disabled={
        !validatePasswordLength(password) && validatePasswordStrength(password)
      }
    />
  );
};
