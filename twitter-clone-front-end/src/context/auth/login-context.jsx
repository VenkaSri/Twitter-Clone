import { createContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const ctxValues = {
    email,
    setEmail,
    username,
    setUsername,
  };

  return (
    <LoginContext.Provider value={ctxValues}>{children}</LoginContext.Provider>
  );
};

export { LoginProvider, LoginContext };
