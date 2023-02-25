import React, { useRef, useState} from "react";

import { TextField } from "@mui/material";

const NameInputField = () => {
  const [nameInputIsValid, setNameInputIsValid] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef();
  const [nameInputTyped, setNameInputTyped] = useState(false);


  const enteredNameHandler = (event) => {
    setNameInputTyped(true);
    setEnteredName(event.target.value);
    console.log(event.target.value);
  };

  const enteredNameIsValid = () => {
    if (nameInputTyped) {
      if (!enteredName.replace(/\s/g, '').length) {
          setNameInputIsValid(true);
      } else {
        setNameInputIsValid(false);
      }
    }
  }

  const styles = {
    floatingLabelFocusStyle: {
        color: "red"
    }
}
  
  const nameInputClassess = nameInputIsValid ? "border border-[#FF0000] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#ff000] !bg-[#fff] max-h-[3.688rem]" : "border border-[#CFD9DE] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#1d9bf0] !bg-[#fff] max-h-[3.688rem]";

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
          nameInputClassess,
          disableUnderline: true,
        }}
        InputLabelProps={{
          
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
