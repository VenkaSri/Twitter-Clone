import { RegisterContext } from "@context/auth/register-context";
import { useContext, useEffect, useState } from "react";
import validator from "validator";

export const useInputValidation = () => {
  const { name, setName, email, setEmail, setDob, dob, setStepOneCompleted } =
    useContext(RegisterContext);
  const [emailChecking, setEmailChecking] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErroMessage] = useState("");

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
      console.log("has only space");
      return;
    }
    const identifier = setTimeout(() => {
      setEmailChecking(false);
      if (validator.isEmail(email.trim())) {
        checkEmail(email.trim());
      } else {
        console.log("not email");
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
    setName,
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
  };
};

// &&
//           checkIfEmailIsAvailable(email.trim())
