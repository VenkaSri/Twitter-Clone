import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { DialogContentHeading } from "../../../../DialogContentHeading";
import { CustomTextField } from "../../../../CustomTextField";
import { usePasswordInputState } from "../../../../../hooks/signup/usePasswordInputState";

export const StepThreeBody = () => {
  const fullScreen = useMediaQuery("(max-width:702px)");
  const { password, setHasAnyValue, inputHandler } = usePasswordInputState();
  const [showPassword, setShowPassword] = useState(false);

  const inputIcon = showPassword ? "Hide" : "Reveal";

  const togglePasswordVisibility = () => {
    setShowPassword((show) => !show);
  };
  const handleInputChange = (value) => {
    inputHandler(value);
    setHasAnyValue(true);
  };

  return (
    <>
      <DialogContentHeading
        text="You'll need a password"
        subtext={"Make sure it's 8 characters or more."}
      />
      <div className="flex-col-container pt-3">
        <CustomTextField
          label="Password"
          icon={true}
          inputValue={password}
          onInputChange={handleInputChange}
        />
      </div>
    </>
  );
};
