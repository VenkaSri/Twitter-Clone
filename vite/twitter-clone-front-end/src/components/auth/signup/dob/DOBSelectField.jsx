import { useState } from "react";
import PropTypes from "prop-types";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useTheme } from "@hooks/useTheme";

const DOBSelectField = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const { darkMode } = useTheme();

  console.log(darkMode);

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
          border: darkMode ? "1px solid #333639" : "1px solid #cfd9de",
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
        autoFocus={props.autoFocus}
      >
        <MenuItem value="" disabled></MenuItem>
        {props.field}
      </Select>
    </FormControl>
  );
};

export default DOBSelectField;

DOBSelectField.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.shape({
    flexGrow: PropTypes.number,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    marginRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  field: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  autoFocus: PropTypes.bool,
};

const KeyboardArrowDownIcon = () => {
  return (
    <div className="min-w-[30px] flex grow fill-gray-400 absolute right-0  pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      </svg>
    </div>
  );
};
