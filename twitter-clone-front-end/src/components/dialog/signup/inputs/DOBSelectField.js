import React, { useEffect } from "react";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { dobActions } from "../../../../state/auth/sign-up/dob-reducer";
import { stepOneActions } from "../../../../state/auth/sign-up/stepone-reducer";

const DOBSelectField = (props) => {
  const dispatch = useDispatch();
  const dob = useSelector((state) => state.rootReducer.signUp.dob);
  const selectedValueHandler = (event) => {
    switch (props.label) {
      case "Month":
        dispatch(dobActions.setMonth(event.target.value));
        break;
      case "Day":
        dispatch(dobActions.setDay(event.target.value));
        break;
      case "Year":
        dispatch(dobActions.setYear(event.target.value));
        break;
      default:
        break;
    }
  };

  const currentValueHandler = () => {
    switch (props.label) {
      case "Month":
        return dob.month;
      case "Day":
        return dob.day;
      case "Year":
        return dob.year;
      default:
        break;
    }
  };

  const autoFocusHandler = () => {
    if (props.label === "Month") return dob.shouldAutoFocus;
  };

  useEffect(() => {
    if (dob.month !== "" && dob.day !== "" && dob.year !== "") {
      dispatch(stepOneActions.setDOBEntered(true));
    }
  }, [dob.month, dob.year, dob.day, dispatch]);

  return (
    <FormControl
      variant="filled"
      sx={{
        bgcolor: "#fff",
        "&.Mui-focused": {
          bgcolor: "white",
        },
        height: "58px",
        borderRadius: "4px",
        flexGrow: props.style.flexGrow,
        width: props.style.width || 0,
        marginRight: props.style.marginRight || 0,
      }}
    >
      <InputLabel htmlFor="demo-simple-select-filled" shrink={true}>
        {props.label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        label={props.label}
        sx={{
          backgroundColor: "#fff",
          border: "1px solid #cfd9de",
          borderRadius: "4px",
          "&.Mui-focused": {
            border: "2px solid #1d9bf0",
            bgcolor: "white",
          },
          "&:hover": {
            bgcolor: "white",
          },
        }}
        defaultValue=""
        value={currentValueHandler()}
        disableUnderline
        IconComponent={KeyboardArrowDownIcon}
        onChange={selectedValueHandler}
        autoFocus={autoFocusHandler()}
      >
        <MenuItem value="" disabled></MenuItem>
        {props.field}
      </Select>
    </FormControl>
  );
};

export default DOBSelectField;
