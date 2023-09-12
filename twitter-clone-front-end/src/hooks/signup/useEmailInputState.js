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
  }, [userEmail]);

  const checkEmailInDatabase = async () => {
    try {
      const result = await postData(`${BASE_URL}/exists`, {
        identifier: userEmail,
      });
      if (result.status === 200) {
        setIsUnavailable(true);
      } else {
        setIsUnavailable(false);
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
