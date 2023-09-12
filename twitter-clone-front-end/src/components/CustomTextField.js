import React, { useEffect, useState } from "react";

import { TextField, InputAdornment } from "@mui/material";
import { useSelector } from "react-redux";
import getIcon from "./UI/icons/iconsutil";

export const CustomTextField = ({
  label,
  inputValue,
  onInputChange,
  disabled,
  icon,
  error,
}) => {
  const darkMode = useSelector(
    (state) => state.rootReducer.globalState.isDarkMode
  );
  const [isFocused, setIsFocused] = useState(false);
  const handleInput = (e) => {
    onInputChange(e.target.value);
  };

  const inputLabelColor = ` ${
    isFocused
      ? error
        ? "dark:text-error text-error"
        : "text-[#1d9bf0]"
      : "dark:text-[#71767b]"
  }`;

  const inputBorderColor = isFocused
    ? error
      ? "ring-2 ring-error"
      : "ring-2 ring-primary-color"
    : error
    ? "ring-2 ring-error"
    : "";

  const borderColor = ` ${
    isFocused
      ? error
        ? "dark:border-error border-error"
        : " dark:border-[#191b1c]"
      : "dark:border-[#333639] border-[#CFD9DE]"
  }`;

  const inputPropClassName = ` border ${borderColor}  " +
  "rounded-[4px] text-black dark:text-white rounded-[4px] ${inputBorderColor}`;

  const [showPassword, setShowPassword] = useState(
    label === "Password" ? true : false
  );
  const inputIcon = showPassword ? "Reveal" : "Hide";
  const togglePasswordVisibility = () => {
    if (icon) {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    }
  };

  return (
    <div className="flex-col-container custom-text-field">
      <TextField
        id="filled-basic"
        type={showPassword ? "password" : "text"}
        label={
          <span
            className={`${inputLabelColor}  font-cReg text-[17px] leading-6`}
          >
            {label}
          </span>
        }
        InputLabelProps={{
          sx: {
            lineHeight: "24px",
            transition: "150ms",
          },

          shrink: disabled ? true : undefined,
        }}
        variant="filled"
        InputProps={{
          endAdornment: icon ? (
            <InputAdornment position="end">
              {" "}
              <div
                className="w-[22px] h-[22px] mr-[10px] cursor-pointer "
                title={showPassword ? "Reveal password" : "Hide Password"}
                onClick={togglePasswordVisibility}
                onMouseDown={(e) => e.preventDefault()}
              >
                {getIcon(inputIcon, { fill: darkMode ? "#fff" : "#000" })}
              </div>
            </InputAdornment>
          ) : null,
          style: {
            background: disabled ? "#F6F8F9" : "none",
            border: disabled ? "none" : undefined,
            fontSize: 17,
          },
          className: inputPropClassName,
          disableUnderline: true,
        }}
        defaultValue={inputValue}
        onChange={handleInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={disabled}
      />
    </div>
  );
};
