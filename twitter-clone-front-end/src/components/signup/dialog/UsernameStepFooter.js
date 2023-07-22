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
  const currUsername = username.enteredUsername;

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
  console.log(username.enteredUsername);

  const buttonInfo = {
    height: 52,
    width: 440,
    text: username.isNewUsernameEntered ? "Next" : "Skip for now",
    ...(username.isNewUsernameEntered
      ? currUsername === username.enteredUsername
        ? {
            text: "Skip for now",
            bgColor: "#000",
            disabled: false,
            txtColor: "#FFF",
            hoverBgColor: "#272c30",
          }
        : {
            text: "Next",
            bgColor: "#000",
            disabled: !isUsernameSet,
            txtColor: "#FFF",
            hoverBgColor: "#272c30",
          }
      : null),
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
