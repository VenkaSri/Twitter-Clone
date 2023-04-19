import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import SVG from "../UI/app/SVG";
import { CONFIRMED_CHECKMARK } from "../../utils/ButtonLinkObjects";
import { userInfoActions } from "../../state/authentication/userInfo-reducer";
import axios from "axios";
import { usernameActions } from "../../state/auth/sign-up/username-reducer";
import { useUserData } from "../../hooks/user-data";

const userNameValidation = (text) => /^[a-zA-Z0-9_]*$/.test(text);

const Username = () => {
  
  const dispatch = useDispatch();
  const username = useSelector((state) => state.rootReducer.signUp.username);
  const email = useSelector((state) => state.rootReducer.signUp.email.enteredEmail);
  const [hasEnteredInput, setHasEnteredInput] = useState(false);
  const [svg, setSvg] = useState(true);
  const [errorText, setErrorText] = useState("");
  
  const usernameChangeHandle = (event) => {
    dispatch(usernameActions.setUsername(event.target.value));
    setHasEnteredInput(true);
  };

  const checkIfUsernameExists = () => {
    axios
      .get(process.env.REACT_APP_CHECK_USERNAME + `${username.enteredUsername}?email=${email}`)
      .then((response) => {
        const isValid = response.data.status === 200;
        const errorText = isValid
          ? ""
          : "That username has been taken. Please choose another.";

        dispatch(userInfoActions.setUsernameValidity(isValid));
        dispatch(usernameActions.setUsernameValid(!isValid));
        setErrorText(errorText);
        setSvg(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    let identifier;
    if (hasEnteredInput) {
      if (username.enteredUsername.length === 0) {
        setSvg(false);
        dispatch(usernameActions.setUsernameValid(false));
        dispatch(userInfoActions.setUsernameValidity(true));
        dispatch(usernameActions.setNewUserNameEntered(false));
        return;
      };
      if (username.enteredUsername.length < 4) {
        dispatch(usernameActions.setNewUserNameEntered(true));
        dispatch(userInfoActions.setUsernameValidity(false));
        dispatch(usernameActions.setUsernameValid(true));
        setErrorText("Your username must be longer than 4 characters.");
      } else if (!userNameValidation(username.enteredUsername)) {
        dispatch(userInfoActions.setUsernameValidity(false));
        dispatch(usernameActions.setNewUserNameEntered(true));
        dispatch(usernameActions.setUsernameValid(true));
        setErrorText("Your username can only contain letters, numbers and '_'");
      } else {
        identifier = setTimeout(() => {
          checkIfUsernameExists();
        }, 600);
      }
    }

    return () => {
      dispatch(userInfoActions.setUsernameValidity(false));
      clearTimeout(identifier);
    };
  }, [username.enteredUsername, hasEnteredInput]);

  return (
    <div className="h-full min-h-[440px] px-[5rem] ">
      <h1 className="font-cBold text-[2rem]">What should we call you</h1>
      <p className="text-[13px] font-cLight text-[#536471] leading-none">
        Your @username is unique. You can always change it later.
      </p>
      <FormControl
        sx={{
          width: "100%",
          height: "60px",
          paddingLeft: "8px",
          paddingTop: "8px",
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: !username.isUsernameValid ? "#1d9bf0" : "#FF0000",
          marginTop: "50px",
          "&:focus-within": {
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: !username.isUsernameValid ? "#1d9bf0" : "#FF0000",
          },
          borderRadius: "4px",
        }}
        variant="standard"
      >
        <InputLabel
          htmlFor="standard-adornment-password"
          className="ml-[6px] mt-[4px] "
          sx={{
            fontSize: "17px",
            color: username.isUsernameValid ? "#FF0000" : "#1d9bf0",
            "&.Mui-focused": {
              color: username.isUsernameValid ? "#FF0000" : "#1d9bf0",
            },
          }}
        >
          Username
        </InputLabel>
        <Input
          inputProps={{maxLength: 15}}
          disableUnderline
          id="standard-adornment-password"
          type="text"
          value={username.enteredUsername}
          endAdornment={
            <InputAdornment position="end">
              {!username.isUsernameValid && (
                <div
                  className="w-[20px] h-[20px] mr-[10px] cursor-pointer fill-[#00BA7C]"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {svg && <SVG svgPath={CONFIRMED_CHECKMARK} />}
                </div>
              )}
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment
              position="start"
              sx={{
                color: username.isUsernameValid ? "#FF0000" : "#1d9bf0",
                "&.Mui-focused": {
                  color: username.isUsernameValid ? "#FF0000" : "#1d9bf0",
                },
              }}
            >
              <div
                className="w-[22px] -mr-[10px] h-[22px]  cursor-pointer "
                onMouseDown={(e) => e.preventDefault()}
              >
                <span>@</span>
              </div>
            </InputAdornment>
          }
          onChange={usernameChangeHandle}
          autoFocus
        />
      </FormControl>
      {username.isUsernameValid && (
        <p className="font-cReg text-[14px] ml-2 text-[#ff0000]">{errorText}</p>
      )}
    </div>
  );
};

export default Username;
