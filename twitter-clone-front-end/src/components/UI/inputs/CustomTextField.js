import React, { useState } from "react";

import { TextField } from "@mui/material";
import { useSelector } from "react-redux";

export const CustomTextField = ({ label }) => {
  const darkMode = useSelector(
    (state) => state.rootReducer.globalState.isDarkMode
  );
  const [isFocused, setIsFocused] = useState(false);

  const inputLabelColor = ` ${
    isFocused ? "dark:text-[#1d9bf0] text-[#1d9bf0]" : "dark:text-[#71767b] "
  }`;
  const inputBorderColor = darkMode
    ? "dark:focus-within:border-[#1d9bf0] "
    : "dark:focus-within:border-[#1d9bf0] focus-within:border-[#1d9bf0]";
  const borderColor = ` ${
    darkMode
      ? " dark:border-[#333639]"
      : "dark:border-[#191b1c] border-[#CFD9DE]"
  }`;

  const inputPropClassName = ` border ${borderColor} focus-within:ring-2 " +
  "focus-within:ring-[rgb(29,155,240)] rounded-[4px]  ${inputBorderColor} text-black dark:text-white`;

  return (
    <div className="flex-col-container">
      <TextField
        id="filled-basic"
        label={
          <span
            className={`${inputLabelColor}  font-cReg text-[17px] leading-6`}
          >
            {label}
          </span>
        }
        InputLabelProps={{
          sx: {
            fontSize: "17px",
            lineHeight: "24px",
            transition: "150ms",
          },
        }}
        variant="filled"
        InputProps={{
          style: { background: "none" },
          className: inputPropClassName,
          disableUnderline: true,
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};
