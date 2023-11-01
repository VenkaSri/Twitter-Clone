import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authApi } from "@/services/authApi";
import { userApi } from "@/services/userApi";
import { userSliceActions } from "@/state/userSlice";

export const useSession = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.userSlice.username);
  const name = useSelector((state) => state.userSlice.name);
  const isAuthenticated = useSelector(
    (state) => state.authSlice.isAuthenticated
  );
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    const checkAuthStatusAndFetchUser = async () => {
      try {
        // Check the authentication status
        const authStatus = await dispatch(
          authApi.endpoints.checkAuthStatus.initiate()
        ).unwrap();

        if (authStatus.user) {
          const userId = authStatus.user.id;
          // If authentication is successful, fetch user details
          const userDetails = await dispatch(
            userApi.endpoints.getPrincipleUser.initiate(userId)
          ).unwrap();

          // Set user details in the state
          dispatch(userSliceActions.setUserInfo(userDetails));
        }
      } catch (error) {
        console.error(
          "Failed to check authentication status or fetch user details:",
          error
        );
      } finally {
        setIsAuthenticating(false);
      }
    };

    checkAuthStatusAndFetchUser();
  }, [dispatch]);

  return { username, name, isAuthenticated, isAuthenticating };
};
