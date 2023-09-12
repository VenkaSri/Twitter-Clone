import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signupSliceActions } from "../../state/app/home/signupSlice";
import { VALIDATION_DELAY } from "../../constants";

const validatePasswordLength = (text) => /^.{8,}$/.test(text);
const validatePasswordStrength = (text) => /^(.)\1*$/.test(text);

export function usePasswordInputState() {
  const dispatch = useDispatch();

  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordLengthValidState, setIsPasswordLengthValidState] =
    useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [hasUserEnteredValue, setHasUserEnteredValue] = useState(false);
  const [userEnteredPassword, setUserEnteredPassword] = useState("");
  const [isPasswordStrengthValidState, setIsPasswordStrengthValidState] =
    useState(false);

  const handlePasswordInputChange = (value) => {
    setUserEnteredPassword(value);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (hasUserEnteredValue) {
        if (!validatePasswordLength(userEnteredPassword)) {
          setIsPasswordLengthValidState(true);
          setIsPasswordStrengthValidState(false);
          dispatch(signupSliceActions.setPassword(""));
          setErrorMessage(true);
        } else if (validatePasswordStrength(userEnteredPassword)) {
          setIsPasswordStrengthValidState(true);
          setErrorMessage(true);
          dispatch(signupSliceActions.setPassword(""));
        } else {
          setIsPasswordStrengthValidState(false);
          setErrorMessage(false);
          setIsPasswordLengthValidState(false);
          dispatch(signupSliceActions.setPassword(userEnteredPassword));
        }
      }
    }, VALIDATION_DELAY);

    return () => {
      setErrorMessage(false);
      clearTimeout(identifier);
    };
  }, [userEnteredPassword, hasUserEnteredValue, dispatch]);

  return {
    userEnteredPassword,
    handlePasswordInputChange,
    setHasUserEnteredValue,
    isPasswordLengthValidState,
    isFocused,
    setIsFocused,
    errorMessage,
    setIsPasswordStrengthValidState,
    isPasswordStrengthValidState,
    setUserEnteredPassword,
  };
}
