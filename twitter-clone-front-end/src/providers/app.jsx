import { LoginProvider } from "@/context/auth/login-context";
import { RegisterProvider } from "@/context/auth/register-context";
import { DialogProvider } from "@/context/dialog/dialog-context";
import { PostEditorProvider } from "@/context/home/post-editor-context";
import { ViewProvider } from "@/context/home/view-context";
import PropTypes from "prop-types";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

const AppProvider = ({ children }) => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <PostEditorProvider>
          <ViewProvider>
            <RegisterProvider>
              <LoginProvider>
                <DialogProvider>{children}</DialogProvider>
              </LoginProvider>
            </RegisterProvider>
          </ViewProvider>
        </PostEditorProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.node,
};
