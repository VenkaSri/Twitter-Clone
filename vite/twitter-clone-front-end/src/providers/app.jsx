import { DialogProvider } from "@/context/dialog/dialog-context";
import PropTypes from "prop-types";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

const AppProvider = ({ children }) => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <DialogProvider>{children}</DialogProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.node,
};
