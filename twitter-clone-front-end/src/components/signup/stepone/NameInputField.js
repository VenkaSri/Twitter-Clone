import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@mui/material";
import { nameActions } from "../../../state/auth/sign-up/name-reducer";
import { stepOneActions } from "../../../state/auth/sign-up/stepone-reducer";

const onlySpaces = (text) => !/[^\s\\]/.test(text);

const NameInputField = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.rootReducer.signUp.name);
  const [isNameValid, setIsNameValid] = useState(false);
  const nameInputClassess = `border border-[${
    isNameValid ? "#ff0000" : "#CFD9DE"
  }] h-[3.688rem] group rounded-[4px] focus-within:border-2 focus-within:border-[${
    isNameValid ? "#ff0000" : "#1d9bf0"
  }] !bg-[#fff] max-h-[3.688rem]`;

  useEffect(() => {
    if (name.hasEnteredInput) {
      dispatch(stepOneActions.setNameEntered(!onlySpaces(name.name)));
      setIsNameValid(onlySpaces(name.name));
    }
  }, [name.name, name.hasEnteredInput, dispatch]);

  const handleChange = (event) => {
    dispatch(nameActions.setHasEnteredInput(true));
    dispatch(nameActions.setName(event.target.value));
  };

  return (
    <div className="flex flex-col grow">
      <TextField
        name="name"
        type="text"
        value={name.name}
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
              color: isNameValid ? "#ff0000" : "#1d9bf0",
            },
          },
        }}
        InputLabelProps={{
          sx: { color: isNameValid ? "#ff0000" : "" },
        }}
        onChange={handleChange}
        autoFocus={name.shouldAutoFocus}
      />
      <div className="px-2 flex">
        <div className="pt-0.5 pr-5 flex flex-col">
          {isNameValid && (
            <span className="font-cReg text-[14px] text-[#ff0000]">
              What is your name?
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NameInputField;
