import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    dispatch(signupSliceActions.setPassword(value));
  };

  const password = useSelector(
    (state) => state.rootReducer.signUpState.password
  );

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (hasUserEnteredValue) {
        if (!validatePasswordLength(password)) {
          setIsPasswordLengthValidState(true);
          setIsPasswordStrengthValidState(false);
          setErrorMessage(true);
        } else if (validatePasswordStrength(password)) {
          setIsPasswordStrengthValidState(true);
          setErrorMessage(true);
        } else {
          setIsPasswordStrengthValidState(false);
          setErrorMessage(false);
          setIsPasswordLengthValidState(false);
          dispatch(signupSliceActions.setPassword(password));
        }
      }
    }, VALIDATION_DELAY);

    return () => {
      setErrorMessage(false);
      clearTimeout(identifier);
    };
  }, [password, hasUserEnteredValue, dispatch]);

  return {
    password,
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
