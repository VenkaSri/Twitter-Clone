import { useErrorStyles } from "@/hooks/inputs/useErrorStyles";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { useState } from "react";

const CustomTextField = ({ label, maxLength, onChange, hasError }) => {
  const [isFocused, setIsFocused] = useState(false);
  const { borderColor, labelColor } = useErrorStyles(isFocused, hasError);

  return (
    <TextField
      id="filled-basic"
      label={
        <span className={`${labelColor}  font-cReg text-[17px] leading-6`}>
          {label}
        </span>
      }
      type="text"
      inputProps={{ maxLength: maxLength }}
      variant="filled"
      sx={{
        input: {
          "@media (prefers-color-scheme: dark)": {
            color: "white",
          },
          fontSize: "17px",
          fontFamily: "TwitterChirp",
        },
      }}
      InputProps={{
        className: `textfield-default  ${borderColor}`,

        classes: {
          input: "input-field",
        },
        disableUnderline: true,
        style: { background: "none" },
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default CustomTextField;

CustomTextField.propTypes = {
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  hasError: PropTypes.bool,
};