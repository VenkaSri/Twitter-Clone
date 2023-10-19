import { RegisterContext } from "@context/auth/register-context";
import { useContext, useEffect, useState } from "react";
import validator from "validator";

const validatePasswordLength = (text) => /^.{8,}$/.test(text);
const validatePasswordStrength = (text) => /^(.)\1*$/.test(text);

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
  };
};
