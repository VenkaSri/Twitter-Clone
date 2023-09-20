import { useDispatch, useSelector } from "react-redux";
import { dialogSliceActions } from "../../state/dialog/dialogSlice";
import { signupSliceActions } from "../../state/app/home/signupSlice";
import { useCurrentStep } from "./ useCurrentStep";
import { loadingSliceActions } from "../../state/app/loading/loadingSlice";
import { postData } from "../../services/postData";
import { fetchUserDetails } from "../../state/user/userSlice";
import { userInfoActions } from "../../state/user/userInfo-reducer";
import { UPDATE_USERNAME_STEP } from "../../utils/constants/dialog/dialogConstants";

import moment from "moment";

export const useFooterButtonConfig = (step = 0, profileSetupStep = 0) => {
  const dispatch = useDispatch();
  const currentStep = useCurrentStep();
  const isProfilePictureSet = useSelector(
    (state) => state.rootReducer.profileSlice.didUserAddProfilePicture
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
      dispatch(loadingSliceActions.setIsDialogLoading(true));
      const response = await postData("/register", {
        name,
        userDob,
        email,
        password,
      });
      console.log(response);
      if (response.status === 200) {
        dispatch(fetchUserDetails());
        dispatch(loadingSliceActions.setIsDialogLoading(false));
        dispatch(dialogSliceActions.setDialogContent("upload_profile_picture"));
      }
      dispatch(userInfoActions.setAuthentication(true));
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
    // dispatch(signupSliceActions.setPostRegisterSteps(UPDATE_USERNAME_STEP));
  };

  // Define the default button text and className

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
    // Customize button configuration for step 2, if needed
    // Example logic:
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
  }

  console.log(profileSetupStep);

  // Add any other step-specific logic here

  return {
    buttonText,
    buttonClassName,
    isButtonDisabled,
    buttonAction,
  };
};
