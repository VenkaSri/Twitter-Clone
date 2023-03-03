import React from "react";
import { useDispatch } from "react-redux";

import NativeSelect from "@mui/material/NativeSelect";
import { FormControl, InputLabel } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { dobActions } from "../../../../state/auth/sign-up/dob-reducer";

const DOBSelectField = (props) => {
  const dispatch = useDispatch;
  return (
    <FormControl
      sx={{
        border: "1px solid #CFD9DE",
        height: "58px",
        borderRadius: "4px",
        flexGrow: props.style.flexGrow,
        width: props.style.width || 0,
        marginRight: props.style.marginRight || 0
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
          name: "age",
          id: "uncontrolled-native",
          className: " !ml-[6px] !mt-[6px] !text-[18px]",
        }}
        IconComponent={KeyboardArrowDownIcon}
        onChange={(event) => {
          dispatch(dobActions.setMonth(event.target.value));
        }}
      >
        <option disabled value={30}></option>
        {props.field}
      </NativeSelect>
    </FormControl>
  );
};

export default DOBSelectField;