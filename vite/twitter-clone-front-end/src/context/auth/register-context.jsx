import { createContext, useState } from "react";
import PropTypes from "prop-types";

const RegisterContext = createContext();

const RegisterProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(0);
  const [stepOneCompleted, setStepOneCompleted] = useState(false);
  const [validPasswordEntered, setValidPasswordEntered] = useState(false);
  const [autoFocusField, setAutoFocusField] = useState("");
  const [dob, setDob] = useState({
    year: "",
    month: "",
    day: "",
  });
  const steps = [0, 1, 2, 3];

  const value = {
    name,
    setName,
    email,
    setEmail,
    setDob,
    dob,
    step,
    setStep,
    stepOneCompleted,
    setStepOneCompleted,
    steps,
    autoFocusField,
    setAutoFocusField,
    setPassword,
    password,
    setShowPassword,
    showPassword,
    setValidPasswordEntered,
    validPasswordEntered,
  };

  return (
    <RegisterContext.Provider value={value}>
      {children}
    </RegisterContext.Provider>
  );
};

export { RegisterProvider, RegisterContext };

RegisterProvider.propTypes = {
  children: PropTypes.node,
};
