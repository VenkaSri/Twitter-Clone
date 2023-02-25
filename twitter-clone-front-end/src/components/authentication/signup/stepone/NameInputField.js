import React, { useRef, useState} from "react";

import { TextField } from "@mui/material";

const NameInputField = () => {
  const [nameInputIsValid, setNameInputIsValid] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef();


  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const enteredNameIsValid = () => {
    if (enteredName.length === 1 && enteredName === ' ') {
      setNameInputIsValid(true);
      return;
    }
    setNameInputIsValid(false);
  }

  return (
    <div className="flex flex-col grow">
      <TextField
        inputRef={nameInputRef}
        type="text"
        id="outlined-basic"
        label="Name"
        variant="filled"
        InputProps={{
          className:
            "border border-[#CFD9DE] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#1d9bf0] !bg-[#fff] max-h-[3.688rem]",
          disableUnderline: true,
        }}
        InputLabelProps={{
          className:
            "!text-[17px] font-cReg text-[#657480] focus-within:text-[#1d9bf0]",
        }}
        onChange={enteredNameHandler}
        onBlur={enteredNameIsValid}
      />
      {nameInputIsValid && (
        <p className="text-[#F4212E] font-cReg ml-2 text-[13px] ">
          What’s your name?
        </p>
      )}
    </div>
  );
};

export default NameInputField;
