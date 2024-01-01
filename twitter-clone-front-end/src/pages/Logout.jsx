import RoundedTextButton from "@/components/RoundedTextButton";
import { Logo } from "@/components/icons/Icons";
import { APP_NAME } from "@/constants/constants";
import { useLogoutMutation } from "@/services/authApi";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  const handleClose = (event, reason) => {
    navigate(-1);
  };

  const handleLogout = async () => {
    try {
      await logout();
      window.location.reload();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <>
      <Dialog
        sx={{
          "& .MuiBackdrop-root": {
            backgroundColor: "#5b7083",
            opacity: "0.4 !important",
          },
        }}
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
        <DialogTitle id="alert-dialog-title" className="dark:bg-black">
          <div className="flex  h-[40px] justify-center mt-4">
            <Logo className="w-[40px] dark:fill-white" />
          </div>
        </DialogTitle>
        <DialogContent className="dark:bg-black">
          <h1 className="font-cBold text-black leading-6 text-[20px] mt-2 dark:text-white">
            Log out of {APP_NAME}?
          </h1>
          <div className="mt-2 font-cR dark:text-white">
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
