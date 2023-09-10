import React from "react";

import { TextField } from "@mui/material";
import { useEmailInputState } from "../../../../hooks/signup/useEmailInputState";

const EmailTextField = () => {
  const {
    email,
    setEmail,
    isFocused,
    setIsFocused,
    isEmailInValid,
    isUnavailable,
  } = useEmailInputState();

  const inputBorderColor =
    isEmailInValid || isUnavailable
      ? "dark:focus-within:border-[#f1202d] focus-within:border-[#f1202d] "
      : "dark:focus-within:border-[#1d9bf0] focus-within:border-[#1d9bf0]";

  const errorBorderColor =
    isEmailInValid || isUnavailable
      ? "dark:border-[#f1202d] border-[#f1202d]"
      : "dark:border-[#1d9bf0] border-[#1e9bf0]";

  const errorColor =
    isEmailInValid || isUnavailable
      ? "dark:text-[#f1202d] text-[#f1202d]"
      : "dark:text-[#1d9bf0] text-[#1e9bf0]";

  const inputLabelColor = ` ${
    isFocused
      ? errorColor
      : isEmailInValid || isUnavailable
      ? "dark:text-[#f1202d] text-[#f1202d]"
      : "dark:text-[#71767b] "
  }`;

  const borderColor = ` ${
    isFocused
      ? errorBorderColor
      : isEmailInValid || isUnavailable
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
        value={email}
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
        onChange={(event) => setEmail(event.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoFocus={email.shouldAutoFocus}
      />
      <div className="px-2 flex">
        <div className="pt-0.5 pr-5 flex flex-col">
          {(isEmailInValid || isUnavailable) && (
            <p className="font-cReg text-[14px] ml-2 text-[#f1202d]">
              {isEmailInValid
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
