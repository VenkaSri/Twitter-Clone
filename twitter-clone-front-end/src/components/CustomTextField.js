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

  console.log(error);

  const inputLabelColor = ` ${
    isFocused
      ? error
        ? "dark:text-[#f1202d] text-[#f1202d]"
        : "text-[#1d9bf0]"
      : "dark:text-[#71767b]"
  }`;

  const inputBorderColor = darkMode
    ? "dark:focus-within:border-[#1d9bf0] "
    : "dark:focus-within:border-[#1d9bf0] focus-within:border-[#1d9bf0]";
  const borderColor = ` ${
    isFocused
      ? error
        ? "dark:border-[#f1202d] border-[#f1202d]"
        : " dark:border-[#191b1c]"
      : "dark:border-[#191b1c] border-[#191b1c]"
  }`;

  const inputPropClassName = ` border ${borderColor} focus-within:ring-2 " +
  "focus-within:ring-[rgb(29,155,240)] rounded-[4px] text-black dark:text-white `;

  const [fieldId, setFieldId] = useState();

  const [showPassword, setShowPassword] = useState(
    label === "Password" ? true : false
  );
  const inputIcon = showPassword ? "Reveal" : "Hide";
  const togglePasswordVisibility = () => {
    if (icon) {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    }
  };

  console.log(inputLabelColor);

  return (
    <div className="flex-col-container custom-text-field">
      <TextField
        id="filled-basic"
        type={showPassword ? "password" : "text"}
        label={
          <span
            className={`${inputLabelColor} focus-within:text-[red] font-cReg text-[17px] leading-6`}
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
                {getIcon(inputIcon, { fill: "#000" })}
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
