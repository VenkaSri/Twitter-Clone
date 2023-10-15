import { Skeleton } from "@mui/material";
import React, { memo, useEffect, useState } from "react";

import {
  useGetPrincipleUserDetailsQuery,
  useGetUserByIDQuery,
} from "../services/user/userApi";

const ProfilePicture = ({ size = 44, isPrincipleUser, userId }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [cachedImage, setCachedImage] = useState(null);
  const {
    data: user,
    isLoading: userLoading,
    isSuccess: userIsSuccess,
    isError: userError,
  } = useGetUserByIDQuery(userId);

  const {
    data: principleUserDetails,
    isLoading: principleUserDetailsLoading,
    isSuccess: principleUserDetailsIsSuccess,
  } = useGetPrincipleUserDetailsQuery();

  useEffect(() => {
    const fetchImage = async (url) => {
      try {
        const response = await fetch(url, {
          headers: {},
        });
        if (response.ok) {
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob);
          setCachedImage(imageUrl);
        }
      } catch (error) {}
    };

    if (isPrincipleUser) {
      if (principleUserDetailsIsSuccess) {
        fetchImage(principleUserDetails.profile_image_url);
      }
    } else {
      if (userIsSuccess) {
        fetchImage(user.profile_image_url);
      }
    }
  }, [principleUserDetailsIsSuccess, userIsSuccess]);

  const profilePicStyle = {
    width: size,
    height: size,
  };

  const imgStyle = {
    width: `calc(${size}px - 4px)`,
    height: `calc(${size}px - 4px)`,
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div style={profilePicStyle} className="place-items-center grid ">
      {!imageLoaded && <Skeleton variant="circular" width={40} height={40} />}
      <img
        src={cachedImage}
        alt="user avatar"
        className={`rounded-full ${!imageLoaded ? "hidden" : ""}`}
        style={imgStyle}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default memo(ProfilePicture);
