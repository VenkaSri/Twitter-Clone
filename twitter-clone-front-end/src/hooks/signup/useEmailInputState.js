import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postData } from "../../services/postData";
import { getData } from "../../services/auth/getData";

import { VALIDATION_DELAY } from "../../constants";
import { get } from "react-hook-form";
import { signupSliceActions } from "../../state/auth/signupSlice";

export function useEmailInputState() {
  const onlySpaces = (text) => !/[^\s\\]/.test(text);
  const handleEmailValidation = (text) =>
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(text);
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [isEmailInValid, setisEmailInValid] = useState(false);
  const [eml, setEml] = useState("");
  const [isUnavailable, setIsUnavailable] = useState(false);
  // const [email, setEmail] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const userEmail = useSelector(
    (state) => state.rootReducer.signUpState.stepOneInfo.email
  );

  const isEmailValid = useSelector(
    (state) => state.rootReducer.signUpState.validEmailSet
  );
  const autoFocus = useSelector(
    (state) => state.rootReducer.signUpState.shouldAutoFocus
  );

  const inputHandler = (event) => {
    // dispatch(signupSliceActions.setEmail(event.target.value));
    setEml(event.target.value);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (eml !== "" && !onlySpaces(eml)) {
        if (handleEmailValidation(eml)) {
          checkEmailInDatabase(eml.trim);
        } else {
          setisEmailInValid(true);
          dispatch(signupSliceActions.setIsValidEmailSet(false));
        }
      }
    }, 400);

    return () => {
      setisEmailInValid(false);
      setIsUnavailable(false);
      clearTimeout(identifier);
    };
  }, [eml]);

  const checkEmailInDatabase = async () => {
    try {
      const result = await getData(`/api/auth/email_available?email=${eml}`);
      const response = await result.json(); // Add "await" here

      if (result.status === 200) {
        if (response.emailAvailable) {
          setIsUnavailable(false);
          dispatch(signupSliceActions.setEmail(eml.trim()));
          dispatch(signupSliceActions.setIsValidEmailSet(true));
        } else {
          setIsUnavailable(true);
          dispatch(signupSliceActions.setIsValidEmailSet(false));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isFocused,
    setIsFocused,
    isEmailInValid,
    isUnavailable,
    userEmail,
    autoFocus,
    inputHandler,
  };
}
