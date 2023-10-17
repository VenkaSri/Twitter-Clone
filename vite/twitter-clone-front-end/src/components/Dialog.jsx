import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";

import { StepOne } from "@components/auth/signup/StepOne";
import { RegisterContext } from "@context/auth/register-context";
import DialogHeader from "@components/dialog/DialogHeader";
import { useContext } from "react";
import DialogFooter from "@components/dialog/DialogFooter";

const MuiDialog = () => {
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
  };

  const { step } = useContext(RegisterContext);

  return (
    <Dialog
      open={true}
      PaperProps={{ sx: sxStyles }}
      transitionDuration={0}
      fullScreen={isMobile}
    >
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
        <StepOne />
        <DialogFooter step={step} />
      </DialogContent>
    </Dialog>
  );
};

export default MuiDialog;

MuiDialog.propTypes = {
  body: PropTypes.node,
};
