import { ErrorBoundary } from "react-error-boundary";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { OverlayLoader } from "../../OverlayLoader";
import { LoginHome } from "./LoginHome";
import { Suspense, lazy, useContext } from "react";
import { RegisterContext } from "@/context/auth/register-context";
import { LoginPassword } from "./LoginPassword";
import { LoginContext } from "@/context/auth/login-context";
// import Loadable from "react-loadable";

// const LoginHome = lazy(() => import("@components/dialog/auth/login/LoginHome"));

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const LoginDialog = () => {
  // const { isOpen } = useContext(Dialo);
  const fullscreen = useMediaQuery("(max-width:702px)");

  let sxStyles = {
    borderRadius: fullscreen ? "none" : "16px",
    height: fullscreen ? "none" : "650px",
    minHeight: "400px",
    minWidth: fullscreen ? "100%" : "600px",
    display: "flex",
    boxShadow: "none",
    overflow: "hidden",
  };

  const { loginStep } = useContext(LoginContext);

  return (
    <Dialog
      open={true}
      PaperProps={{ sx: sxStyles }}
      transitionDuration={0}
      fullScreen={fullscreen}
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "#5b7083",
          opacity: "0.4 !important",
        },
      }}
    >
      {loginStep === 1 ? <LoginPassword /> : <LoginHome />}
    </Dialog>
  );
};

export default LoginDialog;
