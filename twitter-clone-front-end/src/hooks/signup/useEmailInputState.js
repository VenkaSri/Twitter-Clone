import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupSliceActions } from "../../state/app/home/signupSlice";
import { postData } from "../../services/postData";

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

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (email !== "" && !onlySpaces(email)) {
        if (handleEmailValidation(email)) {
          checkEmailInDatabase(email.trim);
        } else {
          setisEmailInValid(true);
          dispatch(signupSliceActions.setEmail(""));
        }
      } else {
        dispatch(signupSliceActions.setEmail(""));
      }
    }, 500);

    return () => {
      setisEmailInValid(false);
      setIsUnavailable(false);
      clearTimeout(identifier);
    };
  }, [email]);

  const checkEmailInDatabase = async () => {
    try {
      const result = await postData(`${BASE_URL}/exists`, {
        identifier: email,
      });
      if (result.status === 200) {
        setIsUnavailable(true);
      } else {
        setIsUnavailable(false);
        dispatch(signupSliceActions.setEmail(email.trim()));
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
  };
}
