import React from "react";

import { InputAdornment, TextField } from "@mui/material";
import SVG from "../app/SVG";
import { useDispatch, useSelector } from "react-redux";
import { signupSliceActions } from "../../../state/app/home/signupSlice";
import { dialogSliceActions } from "../../../state/dialog/dialogSlice";
import { useCurrentStep } from "../../../hooks/signup/ useCurrentStep";

const InputField = (props) => {
  const dispatch = useDispatch();
  const currentStep = useCurrentStep();
  const editFieldHandler = () => {
    dispatch(dialogSliceActions.setDialogContent("sign_up_step_1"));
    dispatch(signupSliceActions.setSignUpStep(currentStep - 1));
    dispatch(signupSliceActions.setShouldAutoFocus(props.label));
  };

  const inputLabelColor = ` 
   dark:text-[#71767b] text-[#71767b]
  }`;

  return (
    <div className="py-3">
      <div className="flex flex-col grow">
        <TextField
          style={{ background: "none" }}
          name={props.label}
          type="text"
          autoFocus={props.autoFocus}
          id="outlined-basic"
          label={
            <span
              className={`${inputLabelColor}  font-cReg text-[17px] leading-6`}
            >
              {props.label}
            </span>
          }
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          value={props.inputValue}
          InputProps={{
            style: { background: "none" },
            className:
              "border border-[#CFD9DE] dark:border-[#333639] h-[3.688rem] rounded-[4px] max-h-[3.688rem] text-black dark:text-white",
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
          onClick={editFieldHandler}
        />
      </div>
    </div>
  );
};

export default InputField;
