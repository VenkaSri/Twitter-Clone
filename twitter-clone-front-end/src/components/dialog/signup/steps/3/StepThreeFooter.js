import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserData } from "../../../../../hooks/user-data";
import Button from "../../../../UI/button/Button";
import { register } from "../../../../../services/auth/register";
import { login } from "../../../../../services/auth/loginFunction";
import { reducerInfoActions } from "../../../../../state/app/loading/dialog/signup/reducer";
import { loginReducerInfoActions } from "../../../../../state/app/home/loginReducer";
import { stepsActions } from "../../../../../state/auth/form/steps-reducer";
import { unfollowDialogActions } from "../../../../../state/dialog/dialogState-reducer";

export const StepThreeFooter = () => {
  const { password, name, email, dob } = useUserData();
  const dispatch = useDispatch();
  const currentStep = useSelector(
    (state) => state.rootReducer.signUp.steps.currentStep
  );
  const isLoading = useSelector(
    (state) => state.rootReducer.loadingState.isLoading
  );
  const reg = useSelector(
    (state) => state.rootReducer.loadingState.isRegistrationComplete
  );

  const loginState = useSelector(
    (state) => state.rootReducer.loginState.isLoggedIn
  );

  useEffect(() => {
    if (reg && loginState) {
      console.log("Setting isLoading to false.");
      dispatch(reducerInfoActions.setLoading(false));
    }
  }, [reg, loginState, dispatch]);

  const buttonInfo = {
    height: 52,
    width: 440,
    text: "Next",
    txtColor: "text-white dark:text-black",
    disabled: !password.isPasswordValid,
    ...(password.isPasswordValid
      ? {
          className:
            "bg-black dark:bg-white dark:hover:bg-[#D7DBDC] hover:bg-[#272C30]",
        }
      : { bgColor: "#86888b" }),
  };

  const handledNext = async () => {
    dispatch(reducerInfoActions.setLoading(true));
    try {
      await register(
        name,
        password.enteredPassword,
        email.enteredEmail,
        dob,
        dispatch,
        reg
      );
      dispatch(reducerInfoActions.setRegistrationComplete(true));
      // login(email.enteredEmail, password.enteredPassword, dispatch);
      dispatch(loginReducerInfoActions.setLoggedIn(true));
      dispatch(unfollowDialogActions.setDialogState(false));
      window.history.replaceState(null, "", "/");
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };
  return (
    <>
      <div className="my-[24px]">
        <Button buttonProps={buttonInfo} onClick={handledNext} />
      </div>
    </>
  );
};
