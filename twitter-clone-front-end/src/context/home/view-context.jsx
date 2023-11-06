import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ViewContext = createContext();

const ViewProvider = ({ children }) => {
  const [isHomeView, setIsHomeView] = useState(true);

  const contextValue = {
    isHomeView,
    setIsHomeView,
  };

  return (
    <ViewContext.Provider value={contextValue}>{children}</ViewContext.Provider>
  );
};

export const useViewContext = () => {
  return useContext(ViewContext);
};

export { ViewProvider };

ViewProvider.propTypes = {
  children: PropTypes.node,
};
