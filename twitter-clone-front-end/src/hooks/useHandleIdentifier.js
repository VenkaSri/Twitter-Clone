import { useDispatch } from "react-redux";
import { authLoadingActions } from "../state/app/loading/dialog/signup/auth/authLoadingSlice";
import { unfollowDialogActions } from "../state/dialog/dialogState-reducer";
import { loginSliceActions } from "../state/app/home/loginSlice";
import { postData } from "../services/postData";

export const useHandleIdentifier = () => {
  const dispatch = useDispatch();

  const handleIdentifier = async (inputValue) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    console.log(inputValue);

    try {
      dispatch(authLoadingActions.setUserExist(true));
      const result = await postData(`${BASE_URL}/exists`, {
        identifier: inputValue,
      });
      if (result.status === 409) {
        dispatch(unfollowDialogActions.setError(true));
        setTimeout(() => {
          dispatch(unfollowDialogActions.setError(false));
        }, 3000);
      } else {
        dispatch(loginSliceActions.setDoesUserExist(true));
      }
      dispatch(authLoadingActions.setUserExist(false));
    } catch (error) {
      console.log(error);
    }
  };

  return handleIdentifier;
};
