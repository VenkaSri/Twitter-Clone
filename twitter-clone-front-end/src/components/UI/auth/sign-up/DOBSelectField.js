import React, { useEffect } from "react";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { dobActions } from "../../../../state/auth/sign-up/dob-reducer";
import { stepOneActions } from "../../../../state/auth/sign-up/stepone-reducer";
import { hover } from "@testing-library/user-event/dist/hover";

const DOBSelectField = (props) => {
  const dispatch = useDispatch();
  const dob = useSelector((state) => state.dob);
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

  useEffect(() => {
    if (dob.month !== "" && dob.day !== "" && dob.year !== "") {
      dispatch(stepOneActions.setDOBEntered(true));
    }
  }, [dob.month, dob.year, dob.day, dispatch]);

  return (
    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel htmlFor="demo-simple-select-filled" shrink={true}>
        Age
      </InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        label="Age"
        sx={{
          bgcolor: "transparent",
          border: "1px solid #808080",
          borderRadius: "4px",
          "&.Mui-focused": {
            borderColor: "#0000FF",
            borderWidth: "1px",
            borderStyle: "solid",
            bgcolor: "transparent",
          },
          "&:hover": {
            bgcolor: "transparent",
          },
        }}
        disableUnderline
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DOBSelectField;
