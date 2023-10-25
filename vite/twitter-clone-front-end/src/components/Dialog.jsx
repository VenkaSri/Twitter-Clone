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
import { useContext } from "react";
import DialogFooter from "@components/dialog/DialogFooter";
import { useSignupConfig } from "@components/auth/signup/signupConfig";
import DialogBody from "./dialog/body/DialogBody";
import { OverlayLoader } from "./dialog/OverlayLoader";
import Head from "./head/Head";
import { DialogContext, DialogProvider } from "@/context/dialog/dialog-context";

const Dialog = () => {
  return (
    <RegisterProvider>
      <AuthDialog />
    </RegisterProvider>
  );
};

export default Dialog;

Dialog.propTypes = {
  body: PropTypes.node,
};

const AuthDialog = () => {
  const { isOpen } = useContext(DialogContext);
  const isMobile = useMediaQuery("(max-width:702px)");
  let sxStyles = {
    borderRadius: "16px",
    width: "600px",
    height: "650px",
    maxHeight: "90vh",
    minHeight: "400px",
    maxWidth: "80vw",
    minWidth: "600px",
    display: "flex",
    boxShadow: "none",
    overflow: "hidden",
    ackgroundColor: "transparent",
  };

  const { step, isLoading } = useContext(RegisterContext);
  const { goToNextStep } = useSignupConfig();

  return (
    <MUIDialog
      open={isOpen}
      PaperProps={{ sx: sxStyles }}
      transitionDuration={0}
      fullScreen={isMobile}
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
          </DialogContent>
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
