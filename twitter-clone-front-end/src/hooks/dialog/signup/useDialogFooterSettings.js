import { useContext, useEffect, useState } from "react";
import { useSignupConfig } from "@/components/auth/signup/signupConfig";
import { RegisterContext } from "@context/auth/register-context";

export const useDialogFooterSettings = (step) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { btnText, btnStyle } = useSignupConfig();
  const {
    stepOneCompleted,
    validPasswordEntered,
    isUsernameValid,
    hasFollowedOneUser,
    setIsContentOverflowing,
    isContentOverflowing,
  } = useContext(RegisterContext);

  useEffect(() => {
    const isButtonDisabled = (step) => {
      switch (step) {
        case 0:
          return !stepOneCompleted;
        case 2:
          return !validPasswordEntered;
        case 4:
          return !isUsernameValid;
        case 5:
          setIsContentOverflowing(true);
          return !hasFollowedOneUser;
        default:
          return false;
      }
    };
    setIsDisabled(isButtonDisabled(step));
  }, [
    step,
    stepOneCompleted,
    validPasswordEntered,
    isUsernameValid,
    hasFollowedOneUser,
    setIsContentOverflowing,
  ]);

  return {
    isDisabled,
    btnText,
    btnStyle,
    isContentOverflowing,
  };
};
