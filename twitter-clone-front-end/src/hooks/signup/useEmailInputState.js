import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupSliceActions } from "../../state/app/home/signupSlice";
import { postData } from "../../services/postData";
import { getData } from "../../services/auth/getData";

import { VALIDATION_DELAY } from "../../constants";
import { get } from "react-hook-form";

export function useEmailInputState() {
  const onlySpaces = (text) => !/[^\s\\]/.test(text);
  const handleEmailValidation = (text) =>
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(text);
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [isEmailInValid, setisEmailInValid] = useState(false);
  const [isUnavailable, setIsUnavailable] = useState(false);
  const [email, setEmail] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const userEmail = useSelector(
    (state) => state.rootReducer.signUpState.stepOneInfo.email
  );
  const autoFocus = useSelector(
    (state) => state.rootReducer.signUpState.shouldAutoFocus
  );

  const inputHandler = (event) => {
    dispatch(signupSliceActions.setEmail(event.target.value));
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (userEmail !== "" && !onlySpaces(userEmail)) {
        if (handleEmailValidation(userEmail)) {
          checkEmailInDatabase(userEmail.trim);
        } else {
          setisEmailInValid(true);
        }
      }
    }, VALIDATION_DELAY);

    return () => {
      setisEmailInValid(false);
      setIsUnavailable(false);
      clearTimeout(identifier);
    };
  }, [userEmail]);

  const checkEmailInDatabase = async () => {
    try {
      const result = await getData(
        `/api/auth/email_available?email=${userEmail}`
      );

      console.log(result);

      if (result.emailAvailable) {
        setIsUnavailable(false);
      } else {
        setIsUnavailable(true);
        dispatch(signupSliceActions.setEmail(userEmail.trim()));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    email,
    setEmail,
    isFocused,
    setIsFocused,
    isEmailInValid,
    isUnavailable,
    userEmail,
    autoFocus,
    inputHandler,
  };
}
