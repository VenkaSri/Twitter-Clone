import { createContext, useState } from "react";
import PropTypes from "prop-types";

const RegisterContext = createContext();

const RegisterProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(0);
  const [dob, setDob] = useState({
    year: "",
    month: "",
    day: "",
  });
  const [stepOneCompleted, setStepOneCompleted] = useState(false);

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
