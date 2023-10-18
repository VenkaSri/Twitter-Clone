import { useState } from "react";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import { Visibility, VisibilityOff } from "@components/icons/Icons";

import PropTypes from "prop-types";

const CustomTextFieldWithIcon = ({ label, type = "text", endAdornment }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const defaultEndAdornment = (
    <div
      role="button"
      aria-label="toggle password visibility"
      onClick={handleClickShowPassword}
      onMouseDown={handleMouseDownPassword}
    >
      {showPassword ? <VisibilityOff /> : <Visibility />}
    </div>
  );

  return (
    <FormControl sx={{ m: 1 }} fullWidth variant="filled">
      <InputLabel
        htmlFor="filled-adornment-password"
        sx={{
          "&.MuiFormLabel-root": {
            "&.Mui-focused": {
              color: "#1e9bf0",
            },
          },
        }}
      >
        {label}
      </InputLabel>
      <FilledInput
        id="filled-adornment-password"
        type={type === "password" && showPassword ? "text" : type}
        endAdornment={
          <InputAdornment position="end">
            {endAdornment || defaultEndAdornment}
          </InputAdornment>
        }
        disableUnderline
        sx={{
          "&.MuiFilledInput-root  ": {
            "&:hover,  &.Mui-focused": {
              background: "none",
            },
          },
          background: "none",
          "@media (prefers-color-scheme: dark)": {
            color: "white",
          },
          fontSize: "17px",
          fontFamily: "TwitterChirp",
        }}
        className="textfield-default"
        classes={{ input: "input-field" }}
      />
    </FormControl>
  );
};

export default CustomTextFieldWithIcon;

CustomTextFieldWithIcon.propTypes = {
  label: PropTypes.string.isRequired,
  endAdornment: PropTypes.node,
  type: PropTypes.string,
};
