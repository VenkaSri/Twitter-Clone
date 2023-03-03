import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { emailActions } from "../../../../state/auth/sign-up/email-reducer";
import axios from "axios";
import { TextField } from "@mui/material";

const BASE_URL = "http://localhost:8080/api/auth/emailOrPhone";

const handleEmailValidation = (text) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(text);
};

// if the users only enter spaces
const onlySpaces = (text) => {
  return !/[^\s\\]/.test(text);
};

const EmailTextField = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email);

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (email.enteredEmail.length < 0 || onlySpaces(email.enteredEmail)) {
        dispatch(emailActions.isEmailValid(false));
      } else {
        dispatch(
          emailActions.isEmailValid(
            !handleEmailValidation(email.enteredEmail.trim())
          )
        );
        axios
          .post(BASE_URL, {
            emailOrPhoneNumber: email.enteredEmail.trim(),
          })
          .then((response) => {
            if (response.data === "") {
              dispatch(emailActions.isEmailAvailable(true));
            } else {
              dispatch(emailActions.isEmailAvailable(false));
              dispatch(emailActions.setAPIResponse(response.data));
            }
          });
      }
    }, 500);

    return () => {
      dispatch(emailActions.isEmailValid(false));
      clearTimeout(identifier);
    };
  }, [email.enteredEmail, dispatch]);

  const emailInputClassess =
    email.isValid || !email.isAvailable
      ? "border border-[#ff0000] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#ff0000] !bg-[#fff] max-h-[3.688rem]"
      : "border border-[#CFD9DE] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#1d9bf0] !bg-[#fff] max-h-[3.688rem]";

  const emailInputLabelClasses =
    email.isValid || !email.isAvailable ? "#ff0000" : "#1d9bf0";

  return (
    <div className="flex flex-col grow">
      <TextField
        name="email"
        type="text"
        id="outlined-basic"
        label="Email"
        variant="filled"
        InputProps={{
          className: emailInputClassess,
          disableUnderline: true,
        }}
        sx={{
          "& label": {
            "&.Mui-focused": {
              color: emailInputLabelClasses,
            },
          },
        }}
        onChange={(event) => {
          dispatch(emailActions.setEmail(event.target.value));
        }}
      />
      {email.isValid && (
        <p className="font-cReg text-[14px] ml-2 text-[#ff0000]">
          Please enter a valid email.
        </p>
      )}
      {!email.isAvailable && (
        <p className="font-cReg text-[14px] ml-2 text-[#ff0000]">
          {email.apiResponse}
        </p>
      )}
    </div>
  );
};

export default EmailTextField;
