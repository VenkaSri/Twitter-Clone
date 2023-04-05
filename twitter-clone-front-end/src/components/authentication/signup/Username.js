import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import SVG from "../../UI/app/SVG";
import { CONFIRMED_CHECKMARK } from "../../../utils/ButtonLinkObjects";
import { userInfoActions } from "../../../state/authentication/userInfo-reducer";
import axios from "axios";

const userNameValidation = (text) => /^[a-zA-Z0-9_]*$/.test(text);

const Username = () => {
  const username = useSelector((state) => state.rootReducer.userInfo.username);
  const [hasEnteredInput, setHasEnteredInput] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [errorText, setErrorText] = useState("");
  const dispatch = useDispatch();

  const usernameChangeHandle = (event) => {
    dispatch(userInfoActions.setUsername(event.target.value));
    setHasEnteredInput(true);
  };

  const checkIfUsernameExists = () => {
    axios
      .get(process.env.REACT_APP_CHECK_USERNAME + `${username}`)
      .then((response) => {
        const isValid = response.data.status !== 200;
        const errorText = isValid
          ? ""
          : "That username has been taken. Please choose another.";
        dispatch(userInfoActions.setUsernameValidity(isValid));
        setIsNameValid(!isValid);
        setErrorText(errorText);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    let identifier;
    if (hasEnteredInput) {
      if (username.length < 4) {
        dispatch(userInfoActions.setUsernameValidity(false));
        setIsNameValid(true);
        setErrorText("Your username must be longer than 4 characters.");
      } else if (username.length > 15) {
        dispatch(userInfoActions.setUsernameValidity(false));
        setIsNameValid(true);
        setErrorText("Your username must be shorter than 15 characters.");
      } else if (!userNameValidation(username)) {
        dispatch(userInfoActions.setUsernameValidity(false));
        setIsNameValid(true);
        setErrorText("Your username can only contain letters, numbers and '_'");
      } else {
        identifier = setTimeout(() => {
          checkIfUsernameExists();
        }, 600);
      }
    }

    return () => {
      clearTimeout(identifier);
    };
  }, [username, hasEnteredInput]);

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
          borderColor: !isNameValid ? "#1d9bf0" : "#FF0000",
          marginTop: "50px",
          "&:focus-within": {
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: !isNameValid ? "#1d9bf0" : "#FF0000",
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
            color: isNameValid ? "#FF0000" : "#1d9bf0",
            "&.Mui-focused": {
              color: isNameValid ? "#FF0000" : "#1d9bf0",
            },
          }}
        >
          Username
        </InputLabel>
        <Input
          disableUnderline
          id="standard-adornment-password"
          type="text"
          value={username}
          endAdornment={
            <InputAdornment position="end">
              {!isNameValid && (
                <div
                  className="w-[20px] h-[20px] mr-[10px] cursor-pointer fill-[#00BA7C]"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <SVG svgPath={CONFIRMED_CHECKMARK} />
                </div>
              )}
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment
              position="start"
              sx={{
                color: isNameValid ? "#FF0000" : "#1d9bf0",
                "&.Mui-focused": {
                  color: isNameValid ? "#FF0000" : "#1d9bf0",
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
      {isNameValid && (
        <p className="font-cReg text-[14px] ml-2 text-[#ff0000]">{errorText}</p>
      )}
    </div>
  );
};

export default Username;
