import { getData } from "../services/auth/getData";
import { useDispatch, useSelector } from "react-redux";
import { userSliceActions } from "../state/user/userSlice";

export const useSession = () => {
  const dispatch = useDispatch();
  const photoSRC = useSelector(
    (state) => state.rootReducer.userSession.profilePicture
  );
  const { username, email, name } = useSelector(
    (state) => state.rootReducer.userSession
  );

  const getUserDetails = async () => {
    try {
      const response = await getData("/api/user_details");
      saveUserDetailsToSlice(response);
    } catch (error) {
      console.log(error);
    }
  };

  const saveUserDetailsToSlice = (response) => {
    dispatch(userSliceActions.setEmail(response.email));
    dispatch(userSliceActions.setName(response.name));
    dispatch(userSliceActions.setUserId(response.id));
    dispatch(userSliceActions.setUsername(response.username));
  };

  return {
    getUserDetails,
    photoSRC,
    username,
    email,
    name,
  };
};
