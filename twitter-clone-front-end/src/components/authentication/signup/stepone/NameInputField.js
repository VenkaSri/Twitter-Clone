import React, { useEffect, useState } from "react";
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
  const [isNameValid, setIsNameValid] = useState(false);
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);

  useEffect(() => {
    if (name.hasEnteredInput) {
      if (!onlySpaces(name.name)) {
        dispatch(stepOneActions.setNameEntered(true));
        setIsNameValid(false);
      } else {
        dispatch(stepOneActions.setNameEntered(false));
        setIsNameValid(true);
      }
    }
  }, [name.name]);

  const nameInputClassess = isNameValid
    ? "border border-[#ff0000] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#ff0000] !bg-[#fff] max-h-[3.688rem]"
    : "border border-[#CFD9DE] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[#1d9bf0] !bg-[#fff] max-h-[3.688rem]";

  const nameInputLabelClasses = isNameValid ? "#ff0000" : "#1d9bf0";

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
        {isNameValid && "What is your name?"}
      </p>
    </div>
  );
};

export default NameInputField;
