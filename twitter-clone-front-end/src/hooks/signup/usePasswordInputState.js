import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupSliceActions } from "../../state/app/home/signupSlice";

export function usePasswordInputState() {
  const dispatch = useDispatch();
  const handlePasswordLengthValidation = (text) => /^.{8,}$/.test(text);

  const handlePasswordStrengthValidation = (text) => /^(.)\1*$/.test(text);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isInValid, setIsInValid] = useState(false);
  const [hasAnyValue, setHasAnyValue] = useState(false);
  const [isNotStrong, setIsNotStrong] = useState(false);
  const password = useSelector(
    (state) => state.rootReducer.signUpState.password
  );

  const inputHandler = (value) => {
    dispatch(signupSliceActions.setPassword(value));
  };

  useEffect(() => {
    if (hasAnyValue) {
      if (!handlePasswordLengthValidation(password)) {
        setIsInValid(true);
      }
      console.log(handlePasswordLengthValidation(password));
    }
  }, [password, hasAnyValue, dispatch]);

  return { password, setInputValue, inputHandler, setHasAnyValue, isInValid };
}
