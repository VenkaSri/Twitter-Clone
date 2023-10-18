import { createContext, useState } from "react";
import PropTypes from "prop-types";

const RegisterContext = createContext();

const RegisterProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(2);
  const [stepOneCompleted, setStepOneCompleted] = useState(false);
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
