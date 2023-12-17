import { useErrorStyles } from "@/hooks/inputs/useErrorStyles";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";

const CustomTextField = ({
  label,
  maxLength,
  onChange,
  inputStyle,
  hasError,
  defaultValue = "",
  autoFocus,
  type = "text",
  endAdornment,
  startAdornment,
  showPassword,
  readonly,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const { borderColor, labelColor } = useErrorStyles(isFocused, hasError);
  const darkMode = useSelector((state) => state.themeSlice.darkMode);

  const readOnlyFieldClass = readonly ? (darkMode ? "#202327" : "#F6F8F9") : "";

  return (
    <TextField
      id="filled-basic"
      label={
        <span className={`${labelColor}  font-cReg text-[17px] leading-6`}>
          {label}
        </span>
      }
      defaultValue={defaultValue}
      type={type === "password" && showPassword ? "text" : type}
      inputProps={{ maxLength: maxLength }}
      variant="filled"
      sx={{
        "& .MuiFilledInput-input.Mui-disabled": {
          opacity: 1,
          color: "#71767b",
          "-webkit-text-fill-color": "#71767b",
          backgroundColor: readOnlyFieldClass,
        },
        input: {
          "@media (prefers-color-scheme: dark)": {
            color: "white",
          },
          fontSize: "17px",
          fontFamily: "chirpR",

          ...inputStyle,
        },
      }}
      InputProps={{
        className: `textfield-default  ${borderColor}  $
        }`,

        disableUnderline: true,
        style: { background: "none" },
        endAdornment: endAdornment || null,
        startAdornment:
          typeof startAdornment === "function"
            ? startAdornment(isFocused)
            : startAdornment || null,
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChange={(e) => onChange(e.target.value)}
      disabled={readonly}
      autoFocus={autoFocus}
    />
  );
};

export default CustomTextField;

CustomTextField.propTypes = {
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  hasError: PropTypes.bool,
  defaultValue: PropTypes.string,
  autoFocus: PropTypes.bool,
  endAdornment: PropTypes.node,
  startAdornment: PropTypes.func,
  type: PropTypes.string,
  inputStyle: PropTypes.object,
  showPassword: PropTypes.bool,
  readonly: PropTypes.bool,
};
