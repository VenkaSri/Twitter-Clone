import React from "react";
import Button from "../../UI/button/Button";
import axios from "axios";
import { useUserData } from "../../../hooks/user-data";
import { useDispatch, useSelector } from "react-redux";
import { stepsActions } from "../../../state/auth/form/steps-reducer";
import { userInfoActions } from "../../../state/user/userInfo-reducer";

const UsernameStepFooter = () => {
  const { email, username, isUsernameSet } = useUserData();
  const currentStep = useSelector(
    (state) => state.rootReducer.signUp.steps.currentStep
  );
  const dispatch = useDispatch();

  const updateUsername = () => {
    axios
      .post(
        process.env.REACT_APP_CHECK_USERNAME +
          `${username.enteredUsername}/${email.enteredEmail}`
      )
      .then(() => {
        dispatch(userInfoActions.setUsername(username.enteredUsername));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const buttonInfo = {
    height: 52,
    width: 440,
    text: username.isNewUsernameEntered ? "Next" : "Skip for now",
    ...(username.isNewUsernameEntered
      ? isUsernameSet
        ? {
            bgColor: "#000",
            disabled: !isUsernameSet,
            txtColor: "#FFF",
            hoverBgColor: "#272c30",
          }
        : { bgColor: "#86888b", txtColor: "#FFF", disabled: !isUsernameSet }
      : {
          bgColor: "#FFF",
          brdColor: "#e5eaf0",
          txtColor: "#000",
          disabled: !isUsernameSet,
          hoverBgColor: "#e7e7e7",
        }),
  };

  const handledNext = () => {
    updateUsername();
    dispatch(stepsActions.setCurrentStep(currentStep + 1));
  };

  return (
    <div className="w-full h-[6.25rem] max:h-[6.25rem] flex justify-center items-center">
      <Button buttonProps={buttonInfo} onClick={handledNext} />
    </div>
  );
};

export default UsernameStepFooter;
