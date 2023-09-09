import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ContentBody } from "../../signup/dialog/ContentBody";
import { CustomTextField } from "../../UI/inputs/CustomTextField";
import { useMediaQuery } from "@mui/material";
import { DialogContentHeading } from "../../DialogContentHeading";
import { TextField } from "@mui/material";
import { borderRadius } from "@mui/system";
import getIcon from "../../UI/icons/iconsutil";

import {
  REVEAL_PASSWORD,
  HIDE_PASSWORD,
} from "../../../utils/ButtonLinkObjects";
import SVG from "../../UI/app/SVG";

export const LoginPasswordInput = () => {
  const fullScreen = useMediaQuery("(max-width:702px)");

  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputIcon = showPassword ? "Hide" : "Reveal";

  const togglePasswordVisibility = () => {
    setShowPassword((show) => !show);
  };
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <div
      className={`overflow-auto
        flex flex-col items-stretch basis-full flex-grow dark:bg-[#000]`}
    >
      <div className="flex flex-col">
        <div
          className={`${
            fullScreen ? " px-8" : " px-20"
          } shrink-0 flex flex-col mb-2`}
        >
          <DialogContentHeading text="Enter your password" />
          <div className="flex-col-container py-3">
            <CustomTextField
              label="Username"
              disabled={true}
              inputValue={"venk"}
            />
          </div>
          <div className="flex-col-container pt-3">
            <CustomTextField
              label="Password"
              icon={true}
              inputValue={inputValue}
              onInputChange={handleInputChange}
            />
          </div>
          <div className="text-[#1d9bf0] font-normal text-[13px] font-cReg leading-5 ">
            <span className="hover:underline cursor-pointer px-2">
              Forgot password?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
