import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserData } from "../../../../../hooks/user-data";
import Button from "../../../../UI/button/Button";
import { stepsActions } from "../../../../../state/auth/form/steps-reducer";
import { apiActions } from "../../../../../state/auth/form/api-reducer";
import moment from "moment";
import axios from "axios";
import { userInfoActions } from "../../../../../state/user/userInfo-reducer";
import { usernameActions } from "../../../../../state/auth/sign-up/username-reducer";

export const StepThreeFooter = () => {
  const { password, name, email, dob } = useUserData();
  const currentStep = useSelector(
    (state) => state.rootReducer.signUp.steps.currentStep
  );
  const userDob = `${dob.year}-${dob.month}-${dob.day}`;
  const dispatch = useDispatch();
  const register = () => {
    dispatch(apiActions.setLoading(false));
    var data = JSON.stringify({
      name: name.name,
      dob: moment(userDob, "YYYY-MMMM-DD").format("YYYY-MM-DD"),
      password: password.enteredPassword,
      email: email.enteredEmail,
    });

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: process.env.REACT_APP_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        dispatch(userInfoActions.setAuthentication(true));
        getUserName();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getUserName = () => {
    axios
      .get(process.env.REACT_APP_GET_USERNAME_URL + `${email.enteredEmail}`)
      .then((response) => {
        dispatch(userInfoActions.setUsername(response.data.data.username));
        dispatch(usernameActions.setUsername(response.data.data.username));
        dispatch(userInfoActions.setName(response.data.data.name));
        dispatch(apiActions.setLoading(true));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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

  const handledNext = () => {
    register();
    dispatch(stepsActions.setCurrentStep(currentStep + 1));
  };
  return (
    <>
      <div className="my-[24px]">
        <Button buttonProps={buttonInfo} onClick={handledNext} />
      </div>
    </>
  );
};
