import { useContext, useEffect, useState } from "react";
import { RegisterContext } from "@/context/auth/register-context";
import { Back, Close } from "@/components/icons/Icons";
import { useCheckAuthStatusQuery, useRegisterUserMutation } from "../authApi";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { json } from "react-router-dom";
import default_profile_picture from "@assets/images/profile-pics/dialog_profile_picture.png";
import {
  useGetPrincipleUserQuery,
  useUpdateUsernameMutation,
  useUploadProfilePictureMutation,
} from "@/services/userApi";
import { useDispatch, useSelector } from "react-redux";
import { userSliceActions } from "@/state/userSlice";

dayjs.extend(customParseFormat);

export const useSignupConfig = () => {
  const dispatch = useDispatch();
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
  } = useContext(RegisterContext);
  const [body, setBody] = useState(null);
  const [userId, setUserId] = useState(null);
  const [headerAction, setHeaderAction] = useState(null);
  const [btnText, setBtnText] = useState("");
  const [btnStyle, setBtnStyle] = useState("");
  const username = useSelector((state) => state.userSlice.username);

  const [registerUser, { isSuccess: isRegistered, data: registeredUser }] =
    useRegisterUserMutation();
  const { isSuccess: isAuthStatusChecked } = useCheckAuthStatusQuery(
    undefined,
    {
      skip: !isRegistered,
    }
  );

  const { data: userInfo, isSuccess: fetchedUser } = useGetPrincipleUserQuery(
    userId,
    {
      skip: userId === null,
    }
  );
  const [uploadProfilePicture, { isSuccess: profilePicUploaded, isLoading }] =
    useUploadProfilePictureMutation();

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

  const handleProfilePictureUpload = async () => {
    const formData = new FormData();
    formData.append("file", profilePicture);
    try {
      const response = await uploadProfilePicture(formData);
    } catch (error) {
      console.log("An error occurred", error);
    }
  };

  useEffect(() => {
    if (usernameUpdated) {
      setStep(step + 1);
    }
  }, [usernameUpdated]);

  useEffect(() => {
    if (isLoading) {
      setIsLoading(true);
    } else if (profilePicUploaded) {
      setStep(step + 1);
      setIsLoading(false);
    }
  }, [isLoading, profilePicUploaded]);

  useEffect(() => {
    if (isAuthStatusChecked) {
      console.log(registeredUser);
      console.log(registeredUser.id);
      setUserId(registeredUser.id);
      if (fetchedUser) {
        dispatch(
          userSliceActions.setUserInfo({
            name: userInfo.name,
            username: userInfo.username,
            userId: userInfo.id,
            profilePicture: userInfo.profile_image_url || "", // Use default empty string if profile_image_url is null
            likedPosts: userInfo.likedPostsIds || [],
          })
        );
        setIsLoading(false);
        setStep(step + 1);
      }
    }
  }, [isAuthStatusChecked, fetchedUser]);

  function mapUserInfoToUserSlice(userInfo) {
    return {
      name: userInfo.name,
      username: userInfo.username,
      userId: userInfo.id,
      profilePicture: userInfo.profile_image_url || "", // Use default empty string if profile_image_url is null
      likedPosts: userInfo.likedPostsIds || [], // Use default empty array if likedPostsIds is null
    };
  }

  const goToNextStep = async () => {
    if (step === 2) {
      setIsLoading(true);
      await handleRegistration();
    } else if (step === 3) {
      if (profilePicture !== default_profile_picture) {
        await handleProfilePictureUpload();
      } else {
        setStep(step + 1);
      }
    } else if (step === 4) {
      if (username !== updateUsername) {
        await updateUsernameHandler();
      }
    } else {
      setStep(step + 1);
    }
  };

  const goBackAStep = () => {
    if (step !== 0) setStep(step - 1);
  };

  // if (step === 0) {
  //   setFooterAction(goToNextStep);
  // }

  return { goToNextStep, headerAction, goBackAStep, body, btnText, btnStyle };
};
