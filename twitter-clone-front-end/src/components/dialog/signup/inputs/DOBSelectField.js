import React, { useState } from "react";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";

const DOBSelectField = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const darkMode = useSelector(
    (state) => state.rootReducer.globalState.isDarkMode
  );

  return (
    <FormControl
      variant="filled"
      sx={{
        height: "58px",
        borderRadius: "4px",
        flexGrow: props.style.flexGrow,
        width: props.style.width || 0,
        marginRight: props.style.marginRight || 0,
      }}
    >
      <InputLabel
        htmlFor="demo-simple-select-filled"
        shrink={true}
        style={isFocused ? { color: "#1d9bf0" } : { color: "#71767b" }}
      >
        {props.label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        label={props.label}
        sx={{
          background: "none",
          border: darkMode ? "1px solid #191b1c" : "1px solid #cfd9de",
          borderRadius: "4px",
          "&.Mui-focused": {
            border: "2px solid #1d9bf0",
            bgcolor: darkMode ? "black" : "white",
          },
          color: darkMode ? "white" : "black",
          "&:hover": {
            bgcolor: darkMode ? "black" : "white",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: darkMode ? "black" : "white",
              color: darkMode ? "white" : "black",
            },
          },
        }}
        defaultValue={props.defaultValue}
        value={props.defaultValue}
        disableUnderline
        IconComponent={KeyboardArrowDownIcon}
        onChange={props.onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoFocus={props.autoFocus === "Date of Birth"}
      >
        <MenuItem value="" disabled></MenuItem>
        {props.field}
      </Select>
    </FormControl>
  );
};

export default DOBSelectField;
