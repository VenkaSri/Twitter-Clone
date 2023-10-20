import { useErrorStyles } from "@/hooks/inputs/useErrorStyles";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { RegisterContext } from "@/context/auth/register-context";

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
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const { borderColor, labelColor } = useErrorStyles(isFocused, hasError);
  const { showPassword } = useContext(RegisterContext);

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
        className: `textfield-default  ${borderColor}`,

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
};
