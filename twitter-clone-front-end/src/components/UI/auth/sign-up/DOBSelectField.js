import React, { useEffect } from "react";

import NativeSelect from "@mui/material/NativeSelect";
import { FormControl, InputLabel } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { dobActions } from "../../../../state/auth/sign-up/dob-reducer";
import { stepOneActions } from "../../../../state/auth/sign-up/stepone-reducer";

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
    <FormControl
      sx={{
        border: "1px solid #CFD9DE",
        height: "58px",
        borderRadius: "4px",
        flexGrow: props.style.flexGrow,
        width: props.style.width || 0,
        marginRight: props.style.marginRight || 0,
      }}
    >
      <InputLabel
        variant="standard"
        htmlFor="uncontrolled-native"
        sx={{ fontSize: 20, m: "6px" }}
      >
        {props.label}
      </InputLabel>
      <NativeSelect
        disableUnderline
        defaultValue={30}
        inputProps={{
          name: props.label,
          id: "uncontrolled-native",
          className: " !ml-[6px] !mt-[6px] !text-[18px]",
        }}
        IconComponent={KeyboardArrowDownIcon}
        onChange={selectedValueHandler}
      >
        <option disabled value={30}></option>
        {props.field}
      </NativeSelect>
    </FormControl>
  );
};

export default DOBSelectField;
