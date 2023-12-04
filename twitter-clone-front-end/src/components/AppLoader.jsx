import { useEffect, useState } from "react";
import { Logo } from "./icons/Icons";
import { Backdrop } from "@mui/material";
import { useTheme } from "../hooks/useTheme";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "@/hooks/useSession";
import { appSliceActions } from "@/state/appSlice";
import { authApi } from "@/services/authApi";
import { authSliceActions } from "@/state/authSlice";

export const AppProgess = () => {
  const { darkMode } = useTheme();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const appLoading = useSelector((state) => state.appSlice.appLoading);

  useEffect(() => {
    const fetchAuthStatus = async () => {
      if (appLoading) {
        try {
          const authStatus = await dispatch(
            authApi.endpoints.checkAuthStatus.initiate()
          ).unwrap();

          if (authStatus.validToken) {
            dispatch(authSliceActions.setIsAuthenticated(true));
            dispatch(appSliceActions.setAppLoading(false));
          }
        } catch (error) {
          console.error("Error fetching authentication status:", error);
        }
      }
    };

    fetchAuthStatus();
  }, [appLoading, dispatch]);

  const bgColor = darkMode ? "black" : "white";

  return (
    <Backdrop
      sx={{
        color: "#fff",
        backgroundColor: bgColor,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={true}
      onClick={handleClose}
      transitionDuration={0}
    >
      <div className="flex grow">
        <div className="m-auto">
          <Logo
            className="dark:fill-[#0f1419] w-[80px]
        "
          />
        </div>
      </div>
    </Backdrop>
  );
};
