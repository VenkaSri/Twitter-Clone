import React from "react";

import { InputAdornment, TextField } from "@mui/material";
import SVG from "../app/SVG";
import { CONFIRMED_CHECKMARK } from "../../../utils/ButtonLinkObjects";
import { useDispatch } from "react-redux";
import { stepsActions } from "../../../state/auth/form/steps-reducer";
import { nameActions } from "../../../state/auth/sign-up/name-reducer";
import { emailActions } from "../../../state/auth/sign-up/email-reducer";
import { dobActions } from "../../../state/auth/sign-up/dob-reducer";

const InputField = (props) => {
  const dispatch = useDispatch();

  const editFieldHandler = () => {
    dispatch(stepsActions.setStepTwo(false));
    switch(props.label) {
      case "Name": 
        dispatch(nameActions.setAutoFocus(true));
        break;
      case "Email": 
        dispatch(emailActions.setAutoFocus(true));
        break;
      case "Date of Birth": 
        dispatch(dobActions.setAutoFocus(true));
        break;
      default: 
        break;
    }
  }

  return (
    <div className="flex flex-col grow">
      <TextField
        name={props.label}
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
        onClick={editFieldHandler}
      />
    </div>
  );
};

export default InputField;
