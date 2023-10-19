import { RegisterContext } from "@/context/auth/register-context";
import { useContext } from "react";
import DialogContentHeading from "@components/dialog/body/DialogBodyHeading";
import PropTypes from "prop-types";
import InputAdornment from "@mui/material/InputAdornment";
import { FilledInput, FormControl, InputLabel } from "@mui/material";
import { Checkmark } from "@/components/icons/Icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useSignupConfig } from "@/components/auth/signup/signupConfig";

dayjs.extend(customParseFormat);

const StepTwo = () => {
  const { dob, email, name, setAutoFocusField } = useContext(RegisterContext);
  const { goBackAStep } = useSignupConfig();

  const userDob = `${dob.month} ${dob.day}, ${dob.year}`;
  const formattedDob = dayjs(userDob).format("MMMM DD, YYYY");

  const handleClick = (field) => {
    goBackAStep();
    setAutoFocusField(field);
  };

  return (
    <>
      <DialogContentHeading text="Create your account" />
      <ReadOnlyTextField
        label="Name"
        defaultValue={name}
        onClick={() => handleClick("name")}
      />
      <ReadOnlyTextField
        label="Email"
        defaultValue={email}
        onClick={() => handleClick("email")}
      />
      <ReadOnlyTextField
        label="Date of birth"
        defaultValue={formattedDob}
        onClick={() => handleClick("dob")}
      />
    </>
  );
};

export default StepTwo;

const ReadOnlyTextField = ({ label, defaultValue, onClick }) => {
  return (
    <FormControl fullWidth sx={{ m: 1 }} variant="filled">
      <InputLabel htmlFor="filled-adornment-amount" className="text-primary">
        {label}
      </InputLabel>
      <FilledInput
        onClick={onClick}
        id="filled-adornment-amount"
        endAdornment={
          <InputAdornment position="end">
            <Checkmark className="w-5 fill-[#00ba7c]" />
          </InputAdornment>
        }
        disableUnderline
        sx={{
          background: "none",
          "@media (prefers-color-scheme: dark)": {
            color: "white",
          },
          fontSize: "17px",
          fontFamily: "TwitterChirp",
        }}
        defaultValue={defaultValue}
        className="textfield-default"
        classes={{ input: "input-field" }}
      />
    </FormControl>
  );
};

ReadOnlyTextField.propTypes = {
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  onClick: PropTypes.func,
};
