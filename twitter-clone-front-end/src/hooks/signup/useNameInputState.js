import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signupSliceActions } from "../../state/auth/signupSlice";

export function useNameInputState() {
  const onlySpaces = (text) => !/[^\s\\]/.test(text);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [hasEnteredInput, setHasEnteredInput] = useState(false);
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);

  useEffect(() => {
    if (hasEnteredInput) {
      setIsNameEntered(!onlySpaces(name));
      setIsNameValid(onlySpaces(name));
      dispatch(signupSliceActions.setName(name.trim()));
    }
  }, [name, hasEnteredInput, isNameEntered, dispatch]);

  return {
    name,
    setName,
    setHasEnteredInput,
    isFocused,
    setIsFocused,
    isNameValid,
  };
}
