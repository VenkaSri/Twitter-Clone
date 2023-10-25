import AppProgess from "@/components/AppLoader";
import { RegisterProvider } from "@/context/auth/register-context";
import { DialogProvider } from "@/context/dialog/dialog-context";
import { useCheckAuthStatusQuery } from "@/services/authApi";
import { authSliceActions } from "@/state/authSlice";
import { userSliceActions } from "@/state/userSlice";
import { store } from "@/store";
import PropTypes from "prop-types";
import { Suspense, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const AppProvider = ({ children }) => {
  const dispatch = useDispatch();

  // const { data, error, isLoading } = useCheckAuthStatusQuery();

  // useEffect(() => {
  //   if (data) {
  //     // Handle successful authentication check (e.g., update Redux store)
  //     dispatch(authSliceActions.setIsAuthenticated(data.validToken));
  //   } else if (error) {
  //     // Handle error in authentication check (e.g., clear user data from store)
  //     dispatch(/* your action to clear user data from the store */);
  //   }
  // }, [data, error, isLoading, dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <DialogProvider>{children}</DialogProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.node,
};
