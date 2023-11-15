import RoundedTextButton from "@/components/RoundedTextButton";
import { Logo } from "@/components/icons/Icons";
import { APP_NAME } from "@/constants/constants";
import { useLogoutMutation } from "@/services/authApi";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  console.log("rendered");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [logout, { isLoading }] = useLogoutMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    navigate(-1);
  };

  const handleLogout = async () => {
    try {
      // Calling the mutation
      await logout().unwrap();
      // Logout successful
      // Here, you can navigate the user to the login page or somewhere else
      navigate("/");
    } catch (error) {
      // Handle logout error
      console.error("Logout failed", error);
    }
  };

  return (
    <>
      <Dialog
        PaperProps={{
          sx: {
            width: 320,
            borderRadius: "16px",
            margin: 0,
            padding: 0,
            boxShadow: "none",
          },
        }}
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div className="flex  h-[40px] justify-center mt-4">
            <Logo className="w-[40px]" />
          </div>
        </DialogTitle>
        <DialogContent>
          <h1 className="font-cBold text-black leading-6 text-[20px] mt-2">
            Log out of {APP_NAME}
          </h1>
          <div className="mt-2 font-cR">
            <span>
              You can always log back in at any time. If you just want to switch
              accounts, you can do that by adding an existing account.
            </span>
          </div>
          <div className="mt-4">
            <RoundedTextButton
              text="Log out"
              className="btn--action min-h-[44px] min-w-[44px] mb-3"
              onClick={handleLogout}
            />
            <RoundedTextButton
              text="Cancel"
              className="btn--skip min-h-[44px] min-w-[44px] mb-3"
              onClick={() => navigate(-1)}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
