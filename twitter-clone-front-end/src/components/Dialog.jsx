import MUIDialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
  RegisterContext,
  RegisterProvider,
} from "@context/auth/register-context";
import DialogHeader from "@components/dialog/DialogHeader";
import { Suspense, lazy, useContext } from "react";
import DialogFooter from "@components/dialog/DialogFooter";
import { useSignupConfig } from "@components/auth/signup/signupConfig";
import DialogBody from "./dialog/body/DialogBody";
import { OverlayLoader } from "./dialog/OverlayLoader";
import Head from "./head/Head";
import { DialogContext, DialogProvider } from "@/context/dialog/dialog-context";
import { LoginHome } from "./dialog/auth/login/LoginHome";

const SignupHome = lazy(() =>
  import("@/components/dialog/auth/signup/SignUpHome")
);

const Dialog = ({ type }) => {
  return <SignUpDialog />;
};

export default Dialog;

Dialog.propTypes = {
  body: PropTypes.node,
};

const SignUpDialog = () => {
  const { isOpen } = useContext(DialogContext);
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

  const { step, isLoading } = useContext(RegisterContext);
  const { goToNextStep } = useSignupConfig();

  return (
    <MUIDialog
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
      {/* {<ErrorDialog />} */}
      {isLoading ? (
        <OverlayLoader />
      ) : step === -1 ? (
        <Suspense fallback={<OverlayLoader />}>
          <SignupHome />
        </Suspense>
      ) : (
        <>
          <Head title="Sign up for X" />
          <DialogTitle style={{ padding: 0 }}>
            <DialogHeader step={step} />
          </DialogTitle>
          <DialogContent
            className="w-full max-w-[600px] mx-auto  flex flex-col relative dark:bg-black"
            sx={{
              "&.MuiDialogContent-root": {
                padding: 0,
                overflow: "",
              },
            }}
          >
            <DialogBody step={step} />
            <DialogFooter step={step} onClick={goToNextStep} />
          </DialogContent>{" "}
        </>
      )}
    </MUIDialog>
  );
};

// const ErrorDialog = () => {
//   const isMobile = useMediaQuery("(max-width:702px)");
//   let sxStyles = {
//     borderRadius: "16px",
//     width: "300px",
//     height: "150px",
//     maxHeight: "90vh",
//     maxWidth: "80vw",
//     display: "flex",
//     boxShadow: "none",
//     overflow: "hidden",
//     backgroundColor: "transparent",
//     boxShadow:
//       "rgba(101, 119, 134, 0.30) 0px 0px 12px, rgba(101, 119, 134, 0.50) 0px 1px 3px 1px",
//   };

//   return (
//     <MUIDialog
//       open={true}
//       PaperProps={{ sx: sxStyles }}
//       transitionDuration={0}
//       fullScreen={isMobile}
//       sx={{
//         "& .MuiBackdrop-root": {
//           backgroundColor: "transparent",
//         },
//       }}
//     >
//       <DialogContent
//         className="w-full max-w-[600px] mx-auto  flex flex-col relative dark:bg-black"
//         sx={{
//           "&.MuiDialogContent-root": {
//             padding: 0,
//             overflow: "",
//           },
//         }}
//       >
//         <p className="text-white">Error</p>
//       </DialogContent>
//     </MUIDialog>
//   );
// };
