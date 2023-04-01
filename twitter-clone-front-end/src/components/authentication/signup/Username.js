import React from "react";

import { useSelector } from "react-redux";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import SVG from "../../UI/app/SVG";
import { CONFIRMED_CHECKMARK } from "../../../utils/ButtonLinkObjects";

const Username = () => {
  const username = useSelector((state) => state.rootReducer.userInfo.username);
  
  return (
    <div className="h-full min-h-[440px] px-[5rem] ">
      <h1 className="font-cBold text-[2rem]">What should we call you</h1>
      <p className="text-[13px] font-cLight text-[#536471] leading-none">
        Your @username is unique. You can always change it later.
      </p>
      <FormControl
        sx={{
          width: "100%",
          height: "60px",
          paddingLeft: "8px",
          paddingTop: "8px",
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "#CFD9DE",
          "&:focus-within": {
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "#1d9bf0",
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
          Username
        </InputLabel>
        <Input
          disableUnderline
          id="standard-adornment-password"
          type="text"
          value={username}
          endAdornment={
            <InputAdornment position="end">
              <div
                className="w-[22px] h-[22px] mr-[10px] cursor-pointer "
                onMouseDown={(e) => e.preventDefault()}
              >
                <SVG svgPath={CONFIRMED_CHECKMARK} />
              </div>
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment position="start">
              <div
                className="w-[22px] h-[22px]  cursor-pointer "
                onMouseDown={(e) => e.preventDefault()}
              >
                <span>@</span>
              </div>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export default Username;
