import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emailActions } from "../../../../state/auth/sign-up/email-reducer";
import { stepOneActions } from "../../../../state/auth/sign-up/stepone-reducer";
import axios from "axios";
import { TextField } from "@mui/material";

const handleEmailValidation = (text) =>
  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(text);

const onlySpaces = (text) => !/[^\s\\]/.test(text);

const EmailTextField = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.rootReducer.signUp.email);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isUnavailable, setIsUnavailable] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

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
        .get(
          process.env.REACT_APP_EMAIL_PHONE +
            `?emailOrPhone=${email.enteredEmail.trim()}`
        )
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

  const inputBorderColor =
    isInvalid || isUnavailable
      ? "dark:focus-within:border-[#f1202d] focus-within:border-[#f1202d] "
      : "dark:focus-within:border-[#1d9bf0]";

  const errorBorderColor =
    isInvalid || isUnavailable
      ? "dark:border-[#f1202d] border-[#f1202d]"
      : "dark:border-[#1d9bf0] border-[#1e9bf0]";

  const errorColor =
    isInvalid || isUnavailable
      ? "dark:text-[#f1202d] text-[#f1202d]"
      : "dark:text-[#1d9bf0] text-[#1e9bf0]";

  const inputLabelColor = ` ${
    isFocused
      ? errorColor
      : isInvalid || isUnavailable
      ? "dark:text-[#f1202d] text-[#f1202d]"
      : "dark:text-[#71767b] "
  }`;

  const borderColor = ` ${
    isFocused
      ? errorBorderColor
      : isInvalid || isUnavailable
      ? "dark:border-[#f1202d] border-[#f1202d]"
      : "dark:border-[#191b1c]"
  }`;

  const inputPropClassName = ` border ${borderColor} focus-within:border-2 " +
  "focus-within:border-[#1d9bf0] rounded-[4px] border-[#CFD9DE] ${inputBorderColor} text-black dark:text-white`;

  return (
    <div className="flex flex-col grow ">
      <TextField
        name="email"
        type="text"
        id="outlined-basic"
        value={email.enteredEmail}
        label={
          <span
            className={`${inputLabelColor}  font-cReg text-[17px] leading-6`}
          >
            Email
          </span>
        }
        variant="filled"
        InputProps={{
          className: inputPropClassName,
          disableUnderline: true,
          style: { background: "none" },
        }}
        onChange={(event) =>
          dispatch(emailActions.setEmail(event.target.value))
        }
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoFocus={email.shouldAutoFocus}
      />
      <div className="px-2 flex">
        <div className="pt-0.5 pr-5 flex flex-col">
          {(isInvalid || isUnavailable) && (
            <p className="font-cReg text-[14px] ml-2 text-[#f1202d]">
              {isInvalid
                ? "Please enter a valid email."
                : "Email has already been taken."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailTextField;
