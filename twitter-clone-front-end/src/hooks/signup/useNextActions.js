import { useDispatch, useSelector } from "react-redux";
import { setDialogContent } from "../../state/dialog/dialogSlice";

export const useNextActions = () => {
  const dispatch = useDispatch();
  const isProfilePictureSet = useSelector(
    (state) => state.rootReducer.signUpState.didUserAddProfilePicture
  );

  const goToSignUpStepTwo = () => {
    // dispatch(setDialogContent("update_username"));
  };

  let handleActions = null;
  const setupUsername = () => {
    // dispatch(setDialogContent("update_username"));
  };

  if (isProfilePictureSet) {
    handleActions = setupUsername;
  }

  return { handleActions };
};
