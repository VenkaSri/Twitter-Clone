import React, { useState, useContext } from "react";

import { TextField } from "@mui/material";


const StepOneInputs = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('Email');

  return (
    <>
    <TextField
      type="text"
      id="outlined-basic"
      label="Name"
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
    <TextField
      type="text"
      id="outlined-basic"
      label="Email"
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
    <TextField
      type="text"
      id="outlined-basic"
      label="Date of birth"
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
    </>
    
  );
};

export default StepOneInputs;
