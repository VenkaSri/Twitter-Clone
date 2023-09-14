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
import { useSession } from "../../../../../hooks/useSession";
import { fetchUserDetails } from "../../../../../state/user/userSlice";
import { loadingSliceActions } from "../../../../../state/app/loading/loadingSlice";

export const StepThreeFooter = () => {
  const dispatch = useDispatch();
  const currentStep = useCurrentStep();
  const { getUserDetails } = useSession();
  const postRegisterStep = useSelector(
    (state) => state.rootReducer.signUpState.postRegisterSteps
  );

  const password = useSelector(
    (state) => state.rootReducer.signUpState.password
  );
  const username = useSelector(
    (state) => state.rootReducer.userSession.username
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
    try {
      dispatch(loadingSliceActions.setIsDialogLoading(true));
      const response = await postData("/register", {
        name,
        userDob,
        email,
        password,
      });
      if (response.status === 200) {
        dispatch(fetchUserDetails());
        dispatch(loadingSliceActions.setIsDialogLoading(false));
        dispatch(signupSliceActions.setPostRegisterSteps(postRegisterStep + 1));
      }
      dispatch(userInfoActions.setAuthentication(true));
    } catch (error) {
      if (error.response) {
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
        !(
          validatePasswordLength(password) === true &&
          validatePasswordStrength(password) === false
        )
      }
    />
  );
};
