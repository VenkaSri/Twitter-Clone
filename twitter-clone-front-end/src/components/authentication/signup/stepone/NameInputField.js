import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { nameActions } from "../../../../state/auth/sign-up/name-reducer";
import { stepOneActions } from "../../../../state/auth/sign-up/stepone-reducer";

const onlySpaces = (text) => {
  return !/[^\s\\]/.test(text);
};

const NameInputField = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);

  useEffect(() => {
    if (name.hasEnteredInput) {
      if (!onlySpaces(name.name)) {
        dispatch(nameActions.setNameValidity(false));
      } else {
        dispatch(nameActions.setNameValidity(true));
      }
    }
    if (name.isNameValid) dispatch(stepOneActions.setNameEntered(true));
  }, [name.name]);

  const nameInputClassess = name.isNameValid
    ? "border border-[#ff0000] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#ff0000] !bg-[#fff] max-h-[3.688rem]"
    : "border border-[#CFD9DE] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#1d9bf0] !bg-[#fff] max-h-[3.688rem]";

  const nameInputLabelClasses = name.isNameValid ? "#ff0000" : "#1d9bf0";

  return (
    <div className="flex flex-col grow">
      <TextField
        name="name"
        type="text"
        id="outlined-basic"
        label="Name"
        variant="filled"
        InputProps={{
          className: nameInputClassess,
          disableUnderline: true,
        }}
        sx={{
          "& label": {
            "&.Mui-focused": {
              color: nameInputLabelClasses,
            },
          },
        }}
        onChange={(event) => {
          dispatch(nameActions.setHasEnteredInput(true));
          dispatch(nameActions.setName(event.target.value));
        }}
      />
      <p className="font-cReg text-[14px] ml-2 text-[#ff0000]">
        {name.isNameValid && "What is your name?"}
      </p>
    </div>
  );
};

export default NameInputField;
