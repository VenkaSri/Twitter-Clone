import React, { useRef, useState } from "react";

import { TextField } from "@mui/material";

const EmailTextField = () => {
  const [nameInputIsValid, setNameInputIsValid] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef();
  const [nameInputTyped, setNameInputTyped] = useState(false);

  const enteredNameHandler = (event) => {
    setNameInputTyped(true);
    if (!(event.target.value).replace(/\s/g, "").length) {
      setNameInputIsValid(true);
    } else {
      setNameInputIsValid(false);
    }

    setEnteredName(event.target.value);
    console.log(event.target.value);
  };

  const enteredNameIsValid = () => {
    if (nameInputTyped) {
      if (!enteredName.replace(/\s/g, "").length) {
        setNameInputIsValid(true);
      } else {
        setNameInputIsValid(false);
      }
    }
  };

  const nameInputClassess = nameInputIsValid
    ? "border border-[#FF0000] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#ff000] !bg-[#fff] max-h-[3.688rem]"
    : "border border-[#CFD9DE] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#1d9bf0] !bg-[#fff] max-h-[3.688rem]";
  
    const nameInputLabelClasses = nameInputIsValid 
    ? "!text-[#ff0000] "
    : "";

  return (
    <div className="flex flex-col grow">
      <TextField
        inputRef={nameInputRef}
        type="email"
        id="outlined-basic"
        label="Email"
        variant="filled"
        InputProps={{
          className: nameInputClassess,
          disableUnderline: true,
        }}
        InputLabelProps={{
          className: nameInputLabelClasses,
        }}
        onChange={enteredNameHandler}
        onBlur={enteredNameIsValid}
      />
      {nameInputIsValid && (
        <p className="text-[#F4212E] font-cReg ml-2 text-[13px] ">
          Please enter a valid email.
        </p>
      )}
    </div>
  );
};

export default EmailTextField;
