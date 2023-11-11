import { ErrorBoundary } from "react-error-boundary";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { OverlayLoader } from "../../OverlayLoader";
import { LoginHome } from "./LoginHome";
import { Suspense, lazy, useContext } from "react";
import { RegisterContext } from "@/context/auth/register-context";
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
    borderRadius: "16px",
    height: fullscreen ? "none" : "650px",
    minWidth: "600px",
    display: "flex",
    boxShadow: "none",
    overflow: "hidden",
  };

  const { step, isLoading } = useContext(RegisterContext);

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
      <LoginHome />
    </Dialog>
  );
};

export default LoginDialog;
