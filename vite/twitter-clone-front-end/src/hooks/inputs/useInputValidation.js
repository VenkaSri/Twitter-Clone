import { RegisterContext } from "@context/auth/register-context";
import { useContext, useEffect, useState } from "react";
import validator from "validator";

export const useInputValidation = () => {
  const { name, setName, email, setEmail, setDob, dob, setStepOneCompleted } =
    useContext(RegisterContext);

  const [hasTyped, setHasTyped] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErroMessage] = useState();

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
    console.log(email);
    const identifier = setTimeout(() => {
      if (!validator.isEmpty(email) && !hasOnlySpaceCharacters(email)) {
        if (validator.isEmail(email.trim())) {
          const checkEmail = async () => {
            const result = await checkIfEmailIsAvailable(email.trim());
            if (result) {
              setEmailError(false);
            } else {
              setEmailError(true);
              setEmailErroMessage("Email has already been taken.");
            }
          };

          // Call the inner async function
          checkEmail();
        } else {
          setEmailError(true);
          setEmailErroMessage("Please enter a valid email.");
        }
      } else {
        setEmailError(false);
      }
    }, 500);

    return () => {
      setEmailError(false);
      clearTimeout(identifier);
    };
  }, [email]);

  useEffect(() => {
    if (
      !validator.isEmpty(name) &&
      /[^\s\\]/.test(name) &&
      !validator.isEmpty(email) &&
      validator.isEmail(email.trim()) &&
      emailError === false &&
      dob.day !== "" &&
      dob.month !== "" &&
      dob.year !== ""
    ) {
      setStepOneCompleted(true);
    } else {
      setStepOneCompleted(false);
    }
  }, [name, email, emailError, dob]);

  const checkIfEmailIsAvailable = async (email) => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/auth/email_available?email=${email}`,
        {
          method: "GET",
          credentials: "omit",
        }
      );

      const response = await res.json();
      if (response.emailAvailable) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
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
