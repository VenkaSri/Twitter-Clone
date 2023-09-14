import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DialogFooterButton } from "../../../../DialogFooterButton";
import { signupSliceActions } from "../../../../../state/app/home/signupSlice";
import { useCurrentStep } from "../../../../../hooks/signup/ useCurrentStep";
import { postData } from "../../../../../services/postData";
import moment from "moment";
import { getData } from "../../../../../services/auth/getData";
import { reducerInfoActions } from "../../../../../state/app/loading/dialog/signup/reducer";
import { unfollowDialogActions } from "../../../../../state/dialog/dialogState-reducer";
import { userInfoActions } from "../../../../../state/user/userInfo-reducer";
import { register } from "../../../../../services/auth/register";
import axios from "axios";

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
    let data = JSON.stringify({
      name: "fasdfd",
      dob: "1232-12-23",
      email: "tesfffeffsfasddt1@gmail.com",
      password: "fasdfdsfdf",
    });

    console.log(data);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: process.env.REACT_APP_BASE_URL + "/api/auth/register",
      data: data,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json", // Make sure this is set correctly
      },
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        const hello = await getData("/api/hello");
        console.log(hello);
      }
      dispatch(userInfoActions.setAuthentication(true));
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status === 409) {
          console.log("Conflict: ", error.response.data);
        }
      }
      console.log(error);
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
