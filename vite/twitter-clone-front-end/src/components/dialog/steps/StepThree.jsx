import CustomTextField from "@/components/CustomTextField";
import { Visibility, VisibilityOff } from "@/components/icons/Icons";
import { RegisterContext } from "@/context/auth/register-context";
import { useInputValidation } from "@/hooks/inputs/useInputValidation";
import ErrorField from "@components/auth/ErrorField";
import DialogContentHeading from "@components/dialog/body/DialogBodyHeading";
import { InputAdornment } from "@mui/material";

import { useContext } from "react";

/* Password step */

const StepThree = () => {
  const { errorMessage, passwordError } = useInputValidation();
  const { setPassword, showPassword, setShowPassword } =
    useContext(RegisterContext);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const PasswordEndornment = () => {
    return (
      <div
        role="button"
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </div>
    );
  };

  return (
    <>
      <DialogContentHeading
        text="You'll need a password"
        subtext="Make sure it's 8 characters or more."
      />
      <div className="flex-col-container py-3">
        <div className="flex flex-col grow ">
          <CustomTextField
            label="Password"
            type="password"
            maxLength={50}
            onChange={setPassword}
            hasError={passwordError}
            endAdornment={
              <InputAdornment position="end">
                {<PasswordEndornment />}
              </InputAdornment>
            }
          />
          {passwordError && <ErrorField errorMessage={errorMessage} />}
        </div>
      </div>
    </>
  );
};

export default StepThree;
