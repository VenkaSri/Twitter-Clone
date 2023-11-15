import React from "react";

import { InputAdornment, TextField } from "@mui/material";
import SVG from "../app/SVG";
import { useDispatch, useSelector } from "react-redux";
import { stepsActions } from "../../../state/auth/form/steps-reducer";
import { nameActions } from "../../../state/auth/sign-up/name-reducer";
import { emailActions } from "../../../state/auth/sign-up/email-reducer";
import { dobActions } from "../../../state/auth/sign-up/dob-reducer";

const InputField = (props) => {
  const dispatch = useDispatch();
  const currentStep = useSelector(
    (state) => state.rootReducer.signUp.steps.currentStep
  );
  const editFieldHandler = () => {
    dispatch(stepsActions.setCurrentStep(currentStep - 1));
    switch (props.label) {
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
  };

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
              <div className={props.svg.style}>
                <SVG svgPath={props.svg.path} />
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
        onClick={currentStep === 2 ? editFieldHandler : null}
      />
    </div>
  );
};

export default InputField;
