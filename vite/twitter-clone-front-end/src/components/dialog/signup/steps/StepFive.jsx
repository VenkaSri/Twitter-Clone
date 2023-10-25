import DialogBodyHeading from "@components/dialog/body/DialogBodyHeading";
import CustomTextField from "@/components/CustomTextField";
import { InputAdornment } from "@mui/material";
import { Checkmark, Exclamation } from "@/components/icons/Icons";
import { useContext } from "react";
import { RegisterContext } from "@/context/auth/register-context";
import { useUsernameValidation } from "@/hooks/inputs/useInputValidation";
import ErrorField from "@/components/auth/ErrorField";
import { useSelector } from "react-redux";

const StepFive = () => {
  const { setUpdatedUsername } = useContext(RegisterContext);
  const { usernameError, errorMessage } = useUsernameValidation();
  const username = useSelector((state) => state.userSlice.username);

  console.log(usernameError);

  return (
    <>
      <DialogBodyHeading
        text="What should be call you?"
        subtext="Your @username is unique. You can always change it later."
      />
      <div className="flex flex-col pt-3">
        <CustomTextField
          label="Username"
          inputStyle={{
            marginLeft: "-5px",
          }}
          type="text"
          maxLength={15}
          defaultValue={username}
          onChange={setUpdatedUsername}
          startAdornment={(isFocused) => (
            <InputAdornment position="start">
              <div
                className={`text-17 mt-1 ${
                  isFocused
                    ? usernameError
                      ? "text-[#f4212e]"
                      : "text-primary"
                    : usernameError
                    ? "text-[#f4212e]"
                    : ""
                }`}
              >
                @
              </div>
            </InputAdornment>
          )}
          endAdornment={
            <InputAdornment position="start">
              {usernameError ? (
                <Exclamation className="w-5 fill-[#f4212e]" />
              ) : (
                <Checkmark className="w-5 fill-[#00ba7c]" />
              )}
            </InputAdornment>
          }
          hasError={usernameError}
        />
        {usernameError && <ErrorField errorMessage={errorMessage} />}
      </div>
    </>
  );
};

export default StepFive;
