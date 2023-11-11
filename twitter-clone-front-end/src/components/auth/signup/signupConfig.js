import { useContext, useEffect, useState } from "react";
import { RegisterContext } from "@/context/auth/register-context";
import {
  authApi,
  useCheckAuthStatusQuery,
  useRegisterUserMutation,
} from "../../../services/authApi";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import default_profile_picture from "@assets/images/profile-pics/dialog_profile_picture.png";
import {
  useGetPrincipleUserQuery,
  useUpdateUsernameMutation,
} from "@/services/userApi";
import { useDispatch, useSelector } from "react-redux";
import { userSliceActions } from "@/state/userSlice";
import { useUploadProfilePicture } from "@/hooks/dialog/useUploadProfilePicture";
import { DialogContext } from "@/context/dialog/dialog-context";
import { useNavigate } from "react-router-dom";
import { authSliceActions } from "@/state/authSlice";
import { useSession } from "@/hooks/useSession";

dayjs.extend(customParseFormat);

export const useSignupConfig = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setIsOpen } = useContext(DialogContext);
  const {
    step,
    setStep,
    setIsLoading,
    name,
    password,
    email,
    dob,
    profilePicture,
    updatedUsername,
    hasFollowedOneUser,
    setIsUserRegistered,
    isUserRegistered,
  } = useContext(RegisterContext);
  const [body, setBody] = useState(null);
  const [userId, setUserId] = useState(null);
  const { isAuthenticated } = useSession();
  const [headerAction, setHeaderAction] = useState(null);
  const [btnText, setBtnText] = useState("");
  const [btnStyle, setBtnStyle] = useState("");
  const username = useSelector((state) => state.userSlice.username);
  const { handleProfilePictureUpload } = useUploadProfilePicture();
  const { setHasError } = useContext(DialogContext);
  const [registerUser, { isSuccess: isRegistered, data: registeredUser }] =
    useRegisterUserMutation();

  const { data: userInfo, isSuccess: fetchedUser } = useGetPrincipleUserQuery(
    userId,
    {
      skip: userId === null,
    }
  );

  // const { isSuccess: authenicated, data: authStatus } = useCheckAuthStatusQuery(
  //   { skip: !isRegistered }
  // );

  const [updateUsername, { isSuccess: usernameUpdated }] =
    useUpdateUsernameMutation();

  useEffect(() => {
    if (step === 0) {
      setBtnText("Next");
      setBtnStyle("btn--next");
      setHeaderAction("close");
      setBody("Step one");
    } else {
      setHeaderAction("back");
    }

    if (step === 1) {
      setBtnText("Sign up");
      setBtnStyle("btn--primary");
    }
    if (step === 2) {
      setBtnText("Next");
      setBtnStyle("btn--next");
    }
    if (step === 3) {
      if (profilePicture !== default_profile_picture) {
        setBtnText("Next");
        setBtnStyle("btn--next");
      } else {
        setBtnText("Skip for now");
        setBtnStyle("btn--skip");
      }
    }

    if (step === 4) {
      if (username !== updatedUsername) {
        setBtnText("Next");
        setBtnStyle("btn--next");
      } else {
        setBtnText("Skip for now");
        setBtnStyle("btn--skip");
      }
    }

    if (step === 5) {
      setBtnText("Next");
      setBtnStyle("btn--next");
    }
  }, [step, profilePicture, updatedUsername]);

  const handleRegistration = async () => {
    const formattedDob = dayjs(`${dob.month} ${dob.day}, ${dob.year}`).format(
      "YYYY-MM-DD"
    );
    const form = JSON.stringify({
      name: name,
      dob: formattedDob,
      email: email,
      password: password,
    });
    await registerUser(form);
  };

  const updateUsernameHandler = async () => {
    const data = JSON.stringify({ updatedUsername: updatedUsername });
    try {
      const respone = await updateUsername(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (usernameUpdated) {
      setStep(step + 1);
    }
  }, [usernameUpdated]);

  console.log(isUserRegistered);

  useEffect(() => {
    if (isRegistered) {
      setIsUserRegistered(true);
      setIsLoading(false);
      setStep(step + 1);
    }
  }, [isRegistered, dispatch]);

  // useEffect(() => {
  //   if (isAuthStatusChecked) {
  //     console.log(authStatus);
  //     setUserId(registeredUser.id);
  //     if (fetchedUser) {
  //       dispatch(
  //         userSliceActions.setUserInfo({
  //           name: userInfo.name,
  //           username: userInfo.username,
  //           userId: userInfo.id,
  //           profilePicture: userInfo.profile_image_url || "",
  //           likedPosts: userInfo.likedPostsIds || [],
  //         })
  //       );
  //       setIsLoading(false);
  //       setStep(step + 1);
  //     }
  //   }
  // }, [isAuthStatusChecked, fetchedUser]);

  const goToNextStep = async () => {
    if (step === 2) {
      setIsLoading(true);
      await handleRegistration();
    } else if (step === 3) {
      if (profilePicture !== default_profile_picture) {
        const response = await handleProfilePictureUpload();
        if (response.data.status === 200) {
          setStep(step + 1);
        } else {
          setHasError(true);
        }
      } else {
        setStep(step + 1);
      }
    } else if (step === 4) {
      if (username !== updateUsername) {
        await updateUsernameHandler();
      }
    } else if (step === 5) {
      if (hasFollowedOneUser) {
        setIsOpen(false);
        const result = await dispatch(
          authApi.endpoints.checkAuthStatus.initiate()
        ).unwrap();
        console.log(result);
      }
    } else {
      if (step < 6) {
        setStep(step + 1);
      } else {
        return;
      }
    }
  };

  const goBackAStep = () => {
    if (step !== 0) {
      setStep(step - 1);
    } else {
      navigate("/");
    }
  };

  return { goToNextStep, headerAction, goBackAStep, body, btnText, btnStyle };
};
