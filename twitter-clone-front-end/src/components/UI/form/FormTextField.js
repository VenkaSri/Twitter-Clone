import React from "react";

import { TextField } from "@mui/material";


const FormTextField = (props) => {
  return (
    <TextField
      type="text"
      id="outlined-basic"
      label={props.labelName}
      variant="filled"
      InputProps={{
        className:
          "border border-[#CFD9DE] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#1d9bf0] !bg-[#fff] max-h-[3.688rem]",
        disableUnderline: true,
      }}
      InputLabelProps={{
        className:
          "!text-[17px] font-cReg text-[#657480] focus-within:text-[#1d9bf0]",
      }}
    />
  );
};

export default FormTextField;
