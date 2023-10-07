import { useDispatch, useSelector } from "react-redux";
import { dialogSliceActions } from "../../state/dialog/dialogSlice";

import { useCurrentStep } from "./ useCurrentStep";
import { postData } from "../../services/postData";
import { fetchUserDetails, userSliceActions } from "../../state/user/userSlice";
import { userInfoActions } from "../../state/user/userInfo-reducer";
import { UPDATE_USERNAME_STEP } from "../../utils/constants/dialog/dialogConstants";

import moment from "moment";
import { signupSliceActions } from "../../state/auth/signupSlice";
import { useNavigate } from "react-router-dom";

export const useFooterButtonConfig = (step = 0, profileSetupStep = 0) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state) => state.rootReducer.userInfo.isAuthenticated
  );
  const dispatch = useDispatch();
  const currentStep = useCurrentStep();
  const isProfilePictureSet = useSelector(
    (state) => state.rootReducer.profileSlice.didUserAddProfilePicture
  );

  const isUsernameValid = useSelector(
    (state) => state.rootReducer.signUpState.isValidUsernameSet
  );

  const isFollowingOneAccount = useSelector(
    (state) => state.rootReducer.signUpState.isFollowingOneAccount
  );

  const username = useSelector(
    (state) => state.rootReducer.userSession.username
  );

  const currentUsername = useSelector(
    (state) => state.rootReducer.signUpState.username
  );

  const { name, email, dob } = useSelector(
    (state) => state.rootReducer.signUpState.stepOneInfo
  );

  const userDob = moment(
    `${dob.year}-${dob.month}-${dob.day}`,
    "YYYY-MMMM-DD"
  ).format("YYYY-MM-DD");
  const isEmailValid = useSelector(
    (state) => state.rootReducer.signUpState.validEmailSet
  );
  const isPasswordValid = useSelector(
    (state) => state.rootReducer.signUpState.isValidPasswordSet
  );
  const password = useSelector(
    (state) => state.rootReducer.signUpState.password
  );

  const userEmail = useSelector(
    (state) => state.rootReducer.signUpState.stepOneInfo.email
  );

  let buttonAction = null;

  let buttonText = "";
  let buttonClassName = "";
  let isButtonDisabled = true;

  const stepOneInfo = useSelector(
    (state) => state.rootReducer.signUpState.stepOneInfo
  );

  const goToStepTwo = () => {
    dispatch(dialogSliceActions.setDialogContent("sign_up_step_2"));
    dispatch(signupSliceActions.setSignUpStep(currentStep + 1));
  };

  const goToStepThree = () => {
    dispatch(dialogSliceActions.setDialogContent("sign_up_step_3"));
    dispatch(signupSliceActions.setSignUpStep(currentStep + 1));
  };

  const goToAddProfilePicStep = async () => {
    try {
      const response = await postData("/api/auth/register", {
        name,
        userDob,
        email,
        password,
      });

      if (response.status === 200) {
        dispatch(fetchUserDetails());
        dispatch(dialogSliceActions.setDialogContent("upload_profile_picture"));
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          console.log("Conflict: ", error.response.data);
        }
      }
      console.log(error);
    }
  };

  const goToUpdateUsernameStep = () => {
    dispatch(dialogSliceActions.setDialogContent("update_username"));
  };

  const updateUsername = async () => {
    try {
      const response = await postData("/api/user/update_username", {
        updatedUsername: currentUsername,
      });

      if (response.status === 200) {
        dispatch(userSliceActions.setUsername(currentUsername));
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          console.log("Conflict: ", error.response.data);
        }
      }
      console.log(error);
    }
  };

  const goToFinalStep = () => {
    if (!(currentUsername === username)) {
      updateUsername();
      dispatch(dialogSliceActions.setDialogContent("final_step"));
    } else {
      dispatch(dialogSliceActions.setDialogContent("final_step"));
    }
  };

  const completeSignup = () => {
    dispatch(dialogSliceActions.setIsDialogOpen(false));
    navigate("/");
  };

  // Customize button configuration based on the step
  if (step === 1) {
    buttonText = "Next";
    if (isEmailValid && stepOneInfo.name && dob.year && dob.month && dob.day) {
      buttonClassName = "button--footer-filled";
      isButtonDisabled = false;
      buttonAction = goToStepTwo;
    } else {
      buttonClassName = "button--footer-disabled";
    }
  } else if (step === 2) {
    buttonText = "Sign up";
    buttonClassName = "button--footer-signup ";
    buttonAction = goToStepThree;
    isButtonDisabled = false;
  } else if (step === 3) {
    buttonText = "Next";
    if (isPasswordValid) {
      buttonClassName = "button--footer-filled";
      isButtonDisabled = false;
      buttonAction = goToAddProfilePicStep;
    } else {
      buttonClassName = "button--footer-disabled";
    }
  } else if (profileSetupStep === 1) {
    isButtonDisabled = false;
    buttonAction = goToUpdateUsernameStep;
    if (isProfilePictureSet) {
      buttonText = "Next";
      buttonClassName = "button--footer-filled";
    } else {
      buttonText = "Skip for now";
      buttonClassName = "button--footer-outline ";
    }
  } else if (profileSetupStep === 2) {
    if (currentUsername === username) {
      buttonText = "Skip for now";
      buttonClassName = "button--footer-outline ";
      isButtonDisabled = false;
      buttonAction = goToFinalStep;
    } else {
      buttonText = "Next";
      if (isUsernameValid) {
        buttonClassName = "button--footer-filled";
        isButtonDisabled = false;
        buttonAction = goToFinalStep;
      } else {
        buttonClassName = "button--footer-disabled";
        isButtonDisabled = true;
      }
    }
  } else if (profileSetupStep === 3) {
    buttonAction = completeSignup;
    buttonText = "Next";
    if (isFollowingOneAccount) {
      buttonClassName = "button--footer-filled";
      isButtonDisabled = false;
    } else {
      buttonClassName = "button--footer-disabled";
      isButtonDisabled = true;
    }
  }

  return {
    buttonText,
    buttonClassName,
    isButtonDisabled,
    buttonAction,
  };
};
