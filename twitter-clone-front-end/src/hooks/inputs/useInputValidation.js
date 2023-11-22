import { USERNAME_MIN_LENGTH } from "@/constants/app";
import { useCheckIfUsernameIsAvailableQuery } from "@/services/userApi";
import { RegisterContext } from "@context/auth/register-context";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const validatePasswordLength = (text) => /^.{8,}$/.test(text);
const validatePasswordStrength = (text) => /^(.)\1*$/.test(text);
const validateUsername = (text) => /^[a-zA-Z0-9_]+$/.test(text);
const hasNonSpaceChars = (text) => /[^\s\\]/.test(text);
const isValidEmail = (email) => {
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailPattern.test(email);
};
const isNotEmpty = (text) => text.trim() !== "";

export const useInputValidation = () => {
  const {
    name,
    email,
    setEmail,
    setDob,
    dob,
    setStepOneCompleted,
    password,
    setValidPasswordEntered,
    updatedUsername,
  } = useContext(RegisterContext);
  const [emailChecking, setEmailChecking] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailErrorMessage, setEmailErroMessage] = useState("");
  const [errorMessage, setErroMessage] = useState("");

  useEffect(() => {
    if (hasNonSpaceChars(name)) {
      setHasTyped(true);
    }
  }, [name]);

  useEffect(() => {
    if (hasTyped) {
      setNameError(!hasNonSpaceChars(name));
    }
  }, [hasTyped, name]);
  useEffect(() => {
    const hasOnlySpaceCharacters = (text) => !hasNonSpaceChars(text);

    if (hasOnlySpaceCharacters(email)) {
      return;
    }
    const identifier = setTimeout(() => {
      setEmailChecking(false);
      if (isValidEmail(email.trim())) {
        checkEmail(email.trim());
      } else {
        setEmailError(true);
        setEmailErroMessage("Please enter a valid email.");
      }
    }, 500);

    return () => {
      setEmailChecking(false);
      setEmailError(false);
      clearTimeout(identifier);
    };
  }, [email]);

  useEffect(() => {
    if (
      isNotEmpty(name) &&
      hasNonSpaceChars(name) &&
      isNotEmpty(email) &&
      emailChecking &&
      !emailError &&
      dob.day !== "" &&
      dob.month !== "" &&
      dob.year !== ""
    ) {
      setStepOneCompleted(true);
    } else {
      setStepOneCompleted(false);
    }
  }, [name, email, emailError, dob, emailChecking, setStepOneCompleted]);

  const checkEmail = (enteredEmail) => {
    setTimeout(async () => {
      try {
        const result = await fetch(
          `${
            import.meta.env.VITE_AUTH_BASE_URL
          }/email_available?email=${enteredEmail}`,
          {
            method: "GET",
            credentials: "omit",
          }
        );

        if (result.ok) {
          const response = await result.json();
          if (response.emailAvailable) {
            setEmailError(false);
          } else {
            setEmailError(true);
            setEmailErroMessage(response.message);
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setEmailChecking(true);
      }
    }, 500);
  };

  useEffect(() => {
    const handlePasswordValidation = () => {
      if (password.length === 0) return;
      if (validatePasswordLength(password)) {
        if (!validatePasswordStrength(password)) {
          setPasswordError(false);
          setValidPasswordEntered(true);
        } else {
          setPasswordError(true);
          setErroMessage("Please enter a stronger password.");
        }
      } else {
        setPasswordError(true);
        setErroMessage(
          "Your password needs to be at least 8 characters. Please enter a longer one"
        );
      }
    };
    const identifier = setTimeout(handlePasswordValidation, 500);

    return () => {
      setValidPasswordEntered(false);
      setPasswordError(false);
      clearTimeout(identifier);
    };
  }, [password]);

  const monthHandler = (e) => {
    setDob((prevState) => ({
      ...prevState,
      month: e.target.value,
    }));
  };

  const dayHandler = (e) => {
    setDob((prevState) => ({
      ...prevState,
      day: e.target.value,
    }));
  };

  const yearHandler = (e) => {
    setDob((prevState) => ({
      ...prevState,
      year: e.target.value,
    }));
  };

  return {
    setHasTyped,
    nameError,
    setEmail,
    emailError,
    emailErrorMessage,
    setDob,
    dob,
    monthHandler,
    yearHandler,
    dayHandler,
    passwordError,
    errorMessage,
    updatedUsername,
  };
};

/* 

username must be more than 4 characters long and can be up to 15 characters or less.

username can contain only letters, numbers, and underscores — no spaces are allowed.


*/

export const useUsernameValidation = () => {
  const { updatedUsername, setIsUsernameValid } = useContext(RegisterContext);
  const username = useSelector((state) => state.userSlice.username);
  const [usernameError, setUsernameError] = useState(false);
  const [errorMessage, setErroMessage] = useState("");

  const { data, isSuccess } = useCheckIfUsernameIsAvailableQuery(
    updatedUsername,
    {
      skip:
        updatedUsername.length < USERNAME_MIN_LENGTH ||
        !validateUsername(updatedUsername) ||
        username === updatedUsername,
    }
  );

  console.log(updatedUsername + " updatedUsernmae");

  useEffect(() => {
    if (username === updatedUsername) {
      setIsUsernameValid(true);
      return;
    }
    const identifier = setTimeout(() => {
      if (updatedUsername.length < USERNAME_MIN_LENGTH) {
        setUsernameError(true);
        setErroMessage("Your username must be longer than 4 characters.");
      } else if (!validateUsername(updatedUsername)) {
        setUsernameError(true);
        setErroMessage(
          "Your username can only contain letters, numbers and '_'"
        );
      } else {
        if (isSuccess) {
          console.log(data.usernameAvailable);
          if (data.usernameAvailable) {
            setUsernameError(false);
            setIsUsernameValid(true);
          } else {
            setUsernameError(true);
            setErroMessage(
              "That username has been taken. Please choose another."
            );
          }
        }
      }
    }, 500);

    return () => {
      setIsUsernameValid(false);
      setUsernameError(false);
      clearTimeout(identifier);
    };
  }, [updatedUsername, setIsUsernameValid, isSuccess, data?.usernameAvailable]);

  return {
    usernameError,
    errorMessage,
  };
};
