import React, { useState } from "react";

import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import {
  REVEAL_PASSWORD,
  HIDE_PASSWORD,
} from "../../../utils/ButtonLinkObjects";
import SVG from "../../UI/app/SVG";

const FinalStep = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  return (
    <div className="h-full min-h-[224px] h-[224px] px-[5rem] flex flex-col">
      <div className="my-[20px] ">
        <h1 className="font-cBold text-[2rem]">You'll need a password</h1>
        <p>Make sure it's 8 characters or more.</p>
      </div>
      <div>
        <FormControl
          sx={{
            width: "100%",
            height: "60px",
            paddingLeft: "8px",
            paddingTop: "8px",
            border: "1px solid #CFD9DE",
            "&:focus-within": {
              border: "2px solid #1d9bf0",
            },
            borderRadius: "4px",
          }}
          variant="standard"
        >
          <InputLabel
            htmlFor="standard-adornment-password"
            className="ml-[6px] mt-[4px] "
            sx={{
              fontSize: "17px",
              "&.Mui-focused": {
                color: "#1d9bf0",
              },
            }}
          >
            Password
          </InputLabel>
          <Input
            disableUnderline
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <div
                  className="w-[22px] h-[22px] mr-[10px] cursor-pointer "
                  title={showPassword ? "Hide password" : "Reveal Password"}
                  onClick={togglePasswordVisibility}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <SVG
                    svgPath={showPassword ? HIDE_PASSWORD : REVEAL_PASSWORD}
                  />
                </div>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </div>
  );
};

export default FinalStep;
