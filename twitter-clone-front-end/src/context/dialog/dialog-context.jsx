import { createContext, useState } from "react";
import PropTypes from "prop-types";

const DialogContext = createContext();

const DialogProvider = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    hasError,
    setHasError,
    isOpen,
    setIsOpen,
  };

  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
};

export { DialogProvider, DialogContext };

DialogProvider.propTypes = {
  children: PropTypes.node,
};
