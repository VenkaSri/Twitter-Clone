import React, { useEffect, useState } from "react";

import { TextField } from "@mui/material";

const EmailTextField = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);

  const enteredEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {

      if (enteredEmail.length < 0 || onlySpaces(enteredEmail)) {
        setEmailIsValid(false);
      } else {
        setEmailIsValid(!handleEmailValidation(enteredEmail.trim()));
      }
    }, 500);

      return () => {
        setEmailIsValid(false);
        clearTimeout(identifier);
      };
    }, [enteredEmail]);

  const handleEmailValidation = (text) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(text);
  };

  const onlySpaces = (text) => {
    return !/[^\s\\]/.test(text);
  };

  const emailInputClassess = emailIsValid
    ? "border border-[#ff0000] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#ff0000] !bg-[#fff] max-h-[3.688rem]"
    : "border border-[#CFD9DE] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#1d9bf0] !bg-[#fff] max-h-[3.688rem]";

  const emailInputLabelClasses = emailIsValid ? "#ff0000" : "#1d9bf0";

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
        onChange={enteredEmailHandler}
      />
      {emailIsValid && (
        <p className="font-cReg text-[14px] ml-2 text-[#ff0000]">
          Please enter a valid email.
        </p>
      )}
    </div>
  );
};

export default EmailTextField;
