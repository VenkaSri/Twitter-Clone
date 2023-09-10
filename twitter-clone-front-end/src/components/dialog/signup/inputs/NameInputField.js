import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@mui/material";
import { useNameInputState } from "../../../../hooks/signup/useNameInputState";
const NameInputField = () => {
  const {
    name,
    setName,
    setHasEnteredInput,
    isFocused,
    setIsFocused,
    isNameValid,
  } = useNameInputState();

  const handleChange = (event) => {
    setHasEnteredInput(true);
    setName(event.target.value);
  };

  const inputBorderColor = isNameValid
    ? "dark:focus-within:border-[#f1202d] focus-within:border-[#f1202d] "
    : "dark:focus-within:border-[#1d9bf0] focus-within:border-[#1d9bf0] ";

  const errorBorderColor = isNameValid
    ? "dark:border-[#f1202d] border-[#f1202d]"
    : "dark:border-[#1d9bf0] border-[#1e9bf0]";

  const errorColor = isNameValid
    ? "dark:text-[#f1202d] text-[#f1202d]"
    : "dark:text-[#1d9bf0] text-[#1e9bf0]";

  const inputLabelColor = ` ${
    isFocused
      ? errorColor
      : isNameValid
      ? "dark:text-[#f1202d] text-[#f1202d]"
      : "dark:text-[#71767b] "
  }`;

  const borderColor = ` ${
    isFocused
      ? errorBorderColor
      : isNameValid
      ? "dark:border-[#f1202d] border-[#f1202d]"
      : "dark:border-[#191b1c]"
  }`;

  const inputPropClassName = ` border ${borderColor} focus-within:border-2 " +
"focus-within:border-[#1d9bf0] rounded-[4px] border-[#CFD9DE] ${inputBorderColor} text-black dark:text-white`;

  return (
    <div className="flex flex-col grow">
      <TextField
        name="name"
        type="text"
        value={name}
        id="outlined-basic"
        label={
          <span
            className={`${inputLabelColor}  font-cReg text-[17px] leading-6`}
          >
            Name
          </span>
        }
        variant="filled"
        InputProps={{
          className: inputPropClassName,
          disableUnderline: true,
          style: { background: "none" },
        }}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        // autoFocus={name.shouldAutoFocus}
      />
      <div className="px-2 flex">
        <div className="pt-0.5 pr-5 flex flex-col">
          {isNameValid && (
            <span className="font-cReg text-[14px] text-[#ff0000]">
              What is your name?
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NameInputField;
