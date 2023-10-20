import { useCheckIfUsernameIsAvailableQuery } from "@/components/user/userApi";
import { RegisterContext } from "@context/auth/register-context";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import validator from "validator";

const validatePasswordLength = (text) => /^.{8,}$/.test(text);
const validatePasswordStrength = (text) => /^(.)\1*$/.test(text);
const validateUsername = (text) => /^[a-zA-Z0-9_]+$/.test(text);

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
    if (!validator.isEmpty(name)) setHasTyped(true);
  }, [hasTyped, name]);

  useEffect(() => {
    if (hasTyped) {
      if (!validator.isEmpty(name) && /[^\s\\]/.test(name)) {
        setNameError(false);
      } else {
        setNameError(true);
      }
    }
  }, [hasTyped, name]);
  const hasOnlySpaceCharacters = (text) => !/[^\s\\]/.test(text);
  useEffect(() => {
    if (hasOnlySpaceCharacters(email)) {
      return;
    }
    const identifier = setTimeout(() => {
      setEmailChecking(false);
      if (validator.isEmail(email.trim())) {
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
      !validator.isEmpty(name) &&
      /[^\s\\]/.test(name) &&
      !validator.isEmpty(email) &&
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
          `http://localhost:8080/api/auth/email_available?email=${enteredEmail}`,
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
      skip: updatedUsername.length < 4 || !validateUsername(updatedUsername),
    }
  );

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (updatedUsername.length < 4) {
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
