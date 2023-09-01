import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserData } from "../../../../../hooks/user-data";
import Button from "../../../../UI/button/Button";
import { register } from "../../../../../services/auth/register";
import { login } from "../../../../../services/auth/loginFunction";
import { reducerInfoActions } from "../../../../../state/app/loading/dialog/signup/reducer";
import { loginReducerInfoActions } from "../../../../../state/app/home/loginReducer";

export const StepThreeFooter = () => {
  const { password, name, email, dob } = useUserData();
  const dispatch = useDispatch();
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
    console.log("useEffect triggered. reg:", reg, "loginState:", loginState);
    if (reg && loginState) {
      console.log("Setting isLoading to false.");
      dispatch(reducerInfoActions.setLoading(false));
    }
  }, [reg, loginState, dispatch]);

  const buttonInfo = {
    height: 52,
    width: 440,
    text: "Next",
    txtColor: "#FFF",
    hoverBgColor: "#272c30",
    disabled: !password.isPasswordValid,
    bgColorEnabled: "#000",
    bgColorDisabled: "#86888b",
    ...(password.isPasswordValid
      ? { bgColor: "#000" }
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
      login(email.enteredEmail, password.enteredPassword, dispatch);
      dispatch(loginReducerInfoActions.setLoggedIn(true));
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
