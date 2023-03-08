import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { emailActions } from "../../../../state/auth/sign-up/email-reducer";
import { stepOneActions } from "../../../../state/auth/sign-up/stepone-reducer";
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
  const [isEmailInvalid, setIsNameInvalid] = useState(false);
  const [isEmailAvailable, setIsEmailAvailable] = useState(false);
  const callAPI = () => {
    axios
                .post(BASE_URL, {
                  emailOrPhoneNumber: email.enteredEmail.trim(),
                })
                .then((response) => {
                  if (response.data === "") {
                    setIsEmailAvailable(false);
                  } else {
                    setIsEmailAvailable(true);
                    dispatch(emailActions.setAPIResponse(response.data));
                  }
                });
    }

  useEffect(() => {
    if (isEmailAvailable === true && isEmailInvalid === false) {
      dispatch(stepOneActions.setEmailEntered(true));
    } else {
      dispatch(stepOneActions.setEmailEntered(false));
    }
    const identifier = setTimeout(() => {
        if (email.enteredEmail.length < 0 || onlySpaces(email.enteredEmail)) {
          setIsNameInvalid(false);
        } else {
          if (!handleEmailValidation(email.enteredEmail.trim())) {
            setIsNameInvalid(true);
          } else {
            callAPI();
          }
         
        } 
    callAPI();
        
    }, 500);

    return () => {
      setIsNameInvalid(false);
      clearTimeout(identifier);
    };
  }, [email.enteredEmail, dispatch]);

  const emailInputClassess =
  isEmailInvalid || isEmailAvailable
  ? "border border-[#ff0000] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#ff0000] !bg-[#fff] max-h-[3.688rem]"
  : "border border-[#CFD9DE] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#1d9bf0] !bg-[#fff] max-h-[3.688rem]";

  const emailInputLabelClasses =
  isEmailInvalid || isEmailAvailable ? "#ff0000" : "#1d9bf0";

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
          dispatch(
            emailActions.setHasEnteredInput(true)
          );
          dispatch(emailActions.setEmail(event.target.value));
        }}
      />
      {isEmailInvalid && (
        <p className="font-cReg text-[14px] ml-2 text-[#ff0000]">
          Please enter a valid email.
        </p>
      )}
      {isEmailAvailable && (
        <p className="font-cReg text-[14px] ml-2 text-[#ff0000]">
          {email.apiResponse}
        </p>
      )}
    </div>
  );
};

export default EmailTextField;
