import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { stepsActions } from "../../../state/auth/form/steps-reducer";
import { dobActions } from "../../../state/auth/sign-up/dob-reducer";
import { emailActions } from "../../../state/auth/sign-up/email-reducer";
import { nameActions } from "../../../state/auth/sign-up/name-reducer";
import axios from "axios";
import moment from "moment";
import { apiActions } from "../../../state/auth/form/api-reducer";
import { userInfoActions } from "../../../state/authentication/userInfo-reducer";
import { BASE_URL, GET_USERNAME_URL } from "../../../config";

const StepsFooter = () => {
  const loading = useSelector((state) => state.rootReducer.signUp.api.loading);
  const { name, email, dob } = useSelector((state) => state.rootReducer.signUp);
  const isUsernameSet = useSelector((state) => state.rootReducer.userInfo.isUsernameSet);
  const userDob = `${dob.year}-${dob.month}-${dob.day}`;
  let buttonText;

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
        dispatch(userInfoActions.setName(response.data.data.name));
        dispatch(apiActions.setLoading(true));
        dispatch(userInfoActions.setAuthentication(true));
      })
      .catch(function (error) {
        console.log(error);
      });


  };

  const dispatch = useDispatch();
  const {
    stepOne,
    password,
    steps: { currentStep },
  } = useSelector((state) => state.rootReducer.signUp);

  const nextStepHandler = () => {
    switch (currentStep) {
      case 1:
        dispatch(nameActions.setAutoFocus(false));
        dispatch(dobActions.setAutoFocus(false));
        dispatch(emailActions.setAutoFocus(false));
        dispatch(stepsActions.setCurrentStep(currentStep + 1));
        break;
      case 2:
        dispatch(stepsActions.setCurrentStep(currentStep + 1));
        break;
      case 3:
        register();
        dispatch(stepsActions.setCurrentStep(currentStep + 1));
        break;
      case 4:
        dispatch(stepsActions.setCurrentStep(currentStep + 1));
        return;
      default:
        break;
    }
  };

  const disableHandler = (currentStep) => {
    switch (currentStep) {
      case 1:
        return stepOne.isEmailEntered &&
          stepOne.isNameEntered &&
          stepOne.isDOBEntered
          ? false
          : true;
      case 2:
        return stepOne.isEmailEntered &&
          stepOne.isNameEntered &&
          stepOne.isDOBEntered
          ? true
          : false;
      case 3:
        return password.isPasswordValid ? false : true;
      case 4:
        return !isUsernameSet;
      default:
        break;
    }
  };

  if (currentStep === 4) {
    buttonText = "Skip for noww";
  } else {
    buttonText = currentStep === 2 ? "Sign Up" : "Next";
  }

  const enableClassHandler = (currentStep) => {
    switch (currentStep) {
      case 1:
        return stepOne.isEmailEntered &&
          stepOne.isNameEntered &&
          stepOne.isDOBEntered
          ? "w-[440px] h-[52px] font-cBold text-[#fff] rounded-full bg-[#000] hover:bg-[#272c30]"
          : "w-[440px] h-[52px] font-cBold text-[#fff] rounded-full bg-[#86888b]";
      case 2:
        return stepOne.isEmailEntered &&
          stepOne.isNameEntered &&
          stepOne.isDOBEntered
          ? "w-[440px] h-[52px] font-cBold text-[#fff] rounded-full bg-[#1D9BF0] hover:bg-[#198CD8]"
          : "bg-[#1D9BF0] hover:bg-[#198CD8] text-[#fff] w-[440px] h-[52px] rounded-full font-cBold";
      case 3:
        return password.isPasswordValid
          ? "w-[440px] h-[52px] font-cBold text-[#fff] rounded-full bg-[#000] hover:bg-[#272c30]"
          : "w-[440px] h-[52px] font-cBold text-[#fff] rounded-full bg-[#86888b]";
      case 4:
        return "w-[440px] h-[52px] font-cBold text-[#000] rounded-full border ";
      default:
        break;
    }
  };

  return (
    <>
      {loading ? (
        <div className="h-[100px] max-h-[100px] bg-[#fff] flex items-center justify-center sticky bottom-0 z-50 grow">
          <button
            className={enableClassHandler(currentStep)}
            disabled={disableHandler(currentStep)}
            onClick={nextStepHandler}
          >
            {buttonText}
          </button>
        </div>
      ) : null}
    </>
  );
};

export default StepsFooter;
