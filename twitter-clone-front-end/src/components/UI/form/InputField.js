import React from "react";
import { useSelector } from "react-redux";

import { InputAdornment, TextField } from "@mui/material";
import SVG from "../app/SVG";
import { CONFIRMED_CHECKMARK } from "../../../utils/ButtonLinkObjects";

const InputField = (props) => {
  

  return (
    <div className="flex flex-col grow">
      <TextField
        name="name"
        type="text"
        id="outlined-basic"
        label={props.label}
        variant="filled"
        InputLabelProps={{
          shrink: true,
        }}
        value={props.inputValue}
        InputProps={{
          className:
            "border border-[#CFD9DE] h-[3.688rem] rounded-[4px] max-h-[3.688rem] !bg-[#ffffff]",
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="end">
              <div className="w-5 fill-[#00BA7C] mt-4">
                <SVG svgPath={CONFIRMED_CHECKMARK} />
              </div>
            </InputAdornment>
          ),
        }}
        sx={{
          "& label": {
            "&.Mui-focused": {
              color: "#1d9bf0",
            },
          },
        }}
      />
    </div>
  );
};

export default InputField;
