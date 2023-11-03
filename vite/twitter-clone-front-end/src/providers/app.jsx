import { DialogProvider } from "@/context/dialog/dialog-context";
import { PostEditorProvider } from "@/context/home/post-editor-context";
import PropTypes from "prop-types";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

const AppProvider = ({ children }) => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <PostEditorProvider>
          <DialogProvider>{children}</DialogProvider>
        </PostEditorProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.node,
};
