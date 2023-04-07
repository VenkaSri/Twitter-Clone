import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emailActions } from "../../../../state/auth/sign-up/email-reducer";
import { stepOneActions } from "../../../../state/auth/sign-up/stepone-reducer";
import axios from "axios";
import { TextField } from "@mui/material";

const BASE_URL = "http://localhost:8080/api/auth/emailOrPhone";

const handleEmailValidation = (text) =>
  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(text);

const onlySpaces = (text) => !/[^\s\\]/.test(text);

const EmailTextField = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.rootReducer.signUp.email);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isUnavailable, setIsUnavailable] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (!email.enteredEmail || onlySpaces(email.enteredEmail)) {
        setIsInvalid(false);
        dispatch(stepOneActions.setEmailEntered(false));
        return setIsUnavailable(false);
      }
      if (!handleEmailValidation(email.enteredEmail.trim())) {
        setIsInvalid(true);
        dispatch(stepOneActions.setEmailEntered(false));
        return setIsUnavailable(false);
      }
      axios
        .get(process.env.REACT_APP_EMAIL_PHONE + `?emailOrPhone=${email.enteredEmail.trim()}` )
        .then((response) => {
          if (response.data.status === 409) {
            dispatch(stepOneActions.setEmailEntered(false));
            setIsUnavailable(true);
          } else {
            dispatch(stepOneActions.setEmailEntered(true));
          }
        });
    }, 500);

    return () => {
      setIsInvalid(false);
      dispatch(stepOneActions.setEmailEntered(false)); 
      setIsUnavailable(false);
      clearTimeout(identifier);
    };
  }, [email.enteredEmail, dispatch]);

  const inputClass = `border border-[${
    isInvalid || isUnavailable ? "#ff0000" : "#CFD9DE"
  }] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[${
    isInvalid || isUnavailable ? "#ff0000" : "#1d9bf0"
  }] !bg-[#fff] max-h-[3.688rem]`;

  return (
    <div className="flex flex-col grow">
      <TextField
        name="email"
        type="text"
        id="outlined-basic"
        value={email.enteredEmail}
        label="Email"
        variant="filled"
        InputProps={{ className: inputClass, disableUnderline: true }}
        sx={{
          "& label.Mui-focused": {
            color: isInvalid || isUnavailable ? "#ff0000" : "#1d9bf0",
          },
        }}
        onChange={(event) =>
          dispatch(emailActions.setEmail(event.target.value))
        }
        autoFocus={email.shouldAutoFocus}
      />
      {(isInvalid || isUnavailable) && (
        <p className="font-cReg text-[14px] ml-2 text-[#ff0000]">
          {isInvalid
            ? "Please enter a valid email."
            : "Email has already been taken."}
        </p>
      )}
    </div>
  );
};

export default EmailTextField;
