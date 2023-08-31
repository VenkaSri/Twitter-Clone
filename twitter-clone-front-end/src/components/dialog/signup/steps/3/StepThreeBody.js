import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import { passwordActions } from "../../../../../state/auth/sign-up/password-reducer";
import IconButton from "../../../../UI/button/IconButton";
import getIcon from "../../../../UI/icons/iconsutil";

const handlePasswordLengthValidation = (text) => /^.{8,}$/.test(text);

const handlePasswordStrengthValidation = (text) => /^(.)\1*$/.test(text);

const StepThreeBody = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isInValid, setIsInValid] = useState(false);
  const password = useSelector((state) => state.rootReducer.signUp.password);

  const [hasAnyValue, setHasAnyValue] = useState(false);
  const [isNotStrong, setIsNotStrong] = useState(false);
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  useEffect(() => {
    if (hasAnyValue) {
      if (!handlePasswordLengthValidation(password.enteredPassword)) {
        setIsInValid(true);
        setIsNotStrong(false);
        dispatch(passwordActions.setPasswordValidity(false));
      } else {
        if (handlePasswordStrengthValidation(password.enteredPassword)) {
          setIsNotStrong(true);
          setIsInValid(false);
          dispatch(passwordActions.setPasswordValidity(false));
        } else {
          setIsNotStrong(false);
          setIsInValid(false);
          dispatch(passwordActions.setPasswordValidity(true));
        }
      }
    }
  }, [password.enteredPassword, hasAnyValue, dispatch]);
  const inputIcon = showPassword ? "Hide" : "Reveal";

  return (
    <>
      <div className="mt-4">
        <FormControl
          sx={{
            width: "100%",
            height: "60px",
            paddingLeft: "8px",
            paddingTop: "8px",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: isInValid || isNotStrong ? "#FF0000" : "#CFD9DE",
            "&:focus-within": {
              borderStyle: "solid",
              borderWidth: 2,
              borderColor: isInValid || isNotStrong ? "#FF0000" : "#1d9bf0",
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
                color: isInValid || isNotStrong ? "#FF0000" : "#1d9bf0",
              },
            }}
          >
            Password
          </InputLabel>
          <Input
            disableUnderline
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <div
                  className="w-[22px] h-[22px] mr-[10px] cursor-pointer "
                  title={showPassword ? "Hide password" : "Reveal Password"}
                  onClick={togglePasswordVisibility}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {getIcon(inputIcon)}
                </div>
              </InputAdornment>
            }
            onChange={(e) => {
              dispatch(passwordActions.setEnteredPassword(e.target.value));
              setHasAnyValue(true);
            }}
          />
        </FormControl>
        {hasAnyValue && (
          <p className="font-cReg text-[14px] ml-2 text-[#ff0000]">
            {isInValid
              ? "Your password needs to be at least 8 characters. Please enter a longer one."
              : ""}
          </p>
        )}
        {hasAnyValue && (
          <p className="font-cReg text-[14px] ml-2 text-[#ff0000]">
            {isNotStrong ? "Please enter a stronger password." : ""}
          </p>
        )}
      </div>
    </>
  );
};

export default StepThreeBody;
