import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { stepsActions } from "../../../state/auth/form/steps-reducer";
import { dobActions } from "../../../state/auth/sign-up/dob-reducer";
import { emailActions } from "../../../state/auth/sign-up/email-reducer";
import { nameActions } from "../../../state/auth/sign-up/name-reducer";
import axios from "axios";
import moment from "moment";
import { apiActions } from "../../../state/auth/form/api-reducer";

const BASE_URL = "http://localhost:8080/api/auth/register";
const StepsFooter = () => {
  const loading = useSelector((state) => state.rootReducer.signUp.api.loading);
  const { name, email, dob } = useSelector((state) => state.rootReducer.signUp);
  const userDob = `${dob.year}-${dob.month}-${dob.day}`;
  let buttonText;

  const register = () => {
    var data = JSON.stringify({
      name: "hfasdf",
      // dob: (moment(userDob, "YYYY-MMMM-DD").format("YYYY-MM-DD")),
      password: password.enteredPassword,
      email: "fasdf@gmail.com",
    });

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    dispatch(apiActions.setLoading(false));
    axios(config)
      .then(function (response) {
        dispatch(stepsActions.setCurrentStep(currentStep + 1));
        dispatch(apiActions.setLoading(true));
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
    if (currentStep === 4) return;
    if (currentStep === 3) {
      return register();
    }
    if (currentStep === 1) {
      dispatch(nameActions.setAutoFocus(false));
      dispatch(dobActions.setAutoFocus(false));
      dispatch(emailActions.setAutoFocus(false));
    }

    dispatch(stepsActions.setCurrentStep(currentStep + 1));
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
      default:
        break;
    }
  };

  if (currentStep === 4) {
    buttonText = "Skip for now";
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
