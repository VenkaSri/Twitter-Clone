import React, { useEffect } from "react";
import Button from "../../UI/button/Button";
import axios from "axios";
import { useUserData } from "../../../hooks/user-data";
import { useDispatch, useSelector } from "react-redux";
import { stepsActions } from "../../../state/auth/form/steps-reducer";
import { userInfoActions } from "../../../state/user/userInfo-reducer";
import { useUserInfo } from "../../../hooks/user-info";

const UsernameStepFooter = () => {
  const { email, username, isUsernameSet } = useUserData();
  const { currentUsername } = useUserInfo();
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
    bgColor: "#FFF",
    txtColor: "#000",
  };

  if (username.isNewUsernameEntered) {
    if (isUsernameSet) {
      if (username.enteredUsername === currentUsername) {
        buttonInfo.bgColor = "#FFF";
        buttonInfo.brdColor = "#e5eaf0";
        buttonInfo.hoverBgColor = "#e7e7e7";
        buttonInfo.text = "Skip for now";
      } else {
        buttonInfo.bgColor = "#000";
        buttonInfo.txtColor = "#FFF";
        buttonInfo.hoverBgColor = "#272c30";
        buttonInfo.text = "Next";
      }
    } else {
      buttonInfo.bgColor = "#86888b";
      buttonInfo.txtColor = "#FFF";
      buttonInfo.text = "Next";
    }
  } else {
    buttonInfo.bgColor = "#FFF";
    buttonInfo.brdColor = "#e5eaf0";
    buttonInfo.hoverBgColor = "#e7e7e7";
    buttonInfo.text = "Skip for now";
  }

  const handledNext = () => {
    if (username.enteredUsername !== currentUsername) {
      updateUsername();
      dispatch(userInfoActions.setUsername(username.enteredUsername));
    }
    dispatch(stepsActions.setCurrentStep(currentStep + 1));
  };

  return (
    <div className="w-full h-[6.25rem] max:h-[6.25rem] flex justify-center items-center">
      <Button buttonProps={buttonInfo} onClick={handledNext} />
    </div>
  );
};

export default UsernameStepFooter;
