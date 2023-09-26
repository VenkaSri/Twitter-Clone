import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { VALIDATION_DELAY } from "../../constants";
import { getData } from "../../services/auth/getData";
import { signupSliceActions } from "../../state/auth/signupSlice";

const validateUsername = (text) => /^[a-zA-Z0-9_]+$/.test(text);

export function useUsernameInputState() {
  const dispatch = useDispatch();
  const [isUsernameLengthValidState, setIsUsernameLengthValidState] =
    useState(false);
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isUsernameValidState, setIsUsernameValidState] = useState(false);

  const handlePasswordInputChange = (value) => {
    dispatch(signupSliceActions.setUsername(value));
  };

  const username = useSelector(
    (state) => state.rootReducer.userSession.username
  );

  const currentUsername = useSelector(
    (state) => state.rootReducer.signUpState.username
  );

  const password = useSelector(
    (state) => state.rootReducer.signUpState.password
  );

  useEffect(() => {
    const identifier = setTimeout(async () => {
      if (currentUsername.length > 15) {
        setIsUsernameLengthValidState(true);
        setIsUsernameValidState(false);
        setErrorMessage("Your username must be shorter than 15 characters.");
        dispatch(signupSliceActions.setIsValidUsernameSet(false));
        setInputError(true);
      } else if (currentUsername.length < 5) {
        setIsUsernameLengthValidState(true);
        setIsUsernameValidState(false);
        setErrorMessage("Your username must be longer than 4 characters.");
        dispatch(signupSliceActions.setIsValidUsernameSet(false));
        setInputError(true);
      } else if (!validateUsername(currentUsername)) {
        setIsUsernameValidState(true);
        dispatch(signupSliceActions.setIsValidUsernameSet(false));
        setErrorMessage(
          "Your username can only contain letters, numbers and '_'"
        );
        setInputError(true);
      } else if (await checkUsernameAvailablity()) {
        setErrorMessage("That username has been taken. Please choose another.");
        setInputError(true);
        setIsUsernameAvailable(true);
      } else {
        setIsUsernameLengthValidState(false);
        setIsUsernameValidState(false);
        setInputError(false);
        dispatch(signupSliceActions.setIsValidUsernameSet(true));
        setIsUsernameAvailable(false);
      }
    }, VALIDATION_DELAY);

    return () => {
      setInputError(false);
      dispatch(signupSliceActions.setIsValidUsernameSet(false));
      clearTimeout(identifier);
    };
  }, [currentUsername, dispatch]);

  const checkUsernameAvailablity = async () => {
    try {
      if (currentUsername === username) {
        return;
      } else {
        const result = await getData(
          `/api/username_available?username=${currentUsername}`
        );
        const response = await result.json();
        if (!response.usernameAvailable) {
          return true;
        } else {
          return false;
        }
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return {
    password,
    handlePasswordInputChange,
    isUsernameLengthValidState,
    errorMessage,
    isUsernameValidState,
    currentUsername,
    inputError,
    isUsernameAvailable,
    username,
  };
}
