import { createContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [loginStep, setLoginStep] = useState(0);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const resetLoginState = () => {
    setLoginStep(0);
    setEmail("");
    setUsername("");
  };

  const ctxValues = {
    email,
    setEmail,
    username,
    setUsername,
    setLoginStep,
    loginStep,
    resetLoginState,
    password,
    setPassword,
  };

  return (
    <LoginContext.Provider value={ctxValues}>{children}</LoginContext.Provider>
  );
};

export { LoginProvider, LoginContext };
