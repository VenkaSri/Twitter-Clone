import { Skeleton } from "@mui/material";
import React, { memo, useEffect, useState } from "react";
import { useGetPostByIDQuery } from "../services/post/postApi";
import { useGetUserByIDQuery } from "../services/user/userApi";

const ProfilePicture = ({ size = 44, isPrincipleUser, userId }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [cachedImage, setCachedImage] = useState(null);
  const [s3URL, setS3URL] = useState("");
  const {
    data: user,
    isLoading: userLoading,
    isSuccess,
    isError: userError,
  } = useGetUserByIDQuery(userId);

  // useEffect(() => {
  //   if (isSuccess) {
  //     setS3URL(user.profile_image_url);
  //   }
  // }, [isSuccess]);

  // console.log(s3URL);

  useEffect(() => {
    const fetchAndCacheImage = async () => {
      if (isSuccess && user?.profile_image_url) {
        try {
          const response = await fetch(user.profile_image_url, {
            // Specify empty headers to avoid adding any Cache-Control headers.
            headers: {},
          });
          if (response.ok) {
            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setCachedImage(imageUrl);
          }
        } catch (error) {
          console.error("Error fetching image:", error);
        }
      }
    };

    fetchAndCacheImage();
  }, [isSuccess, user?.profile_image_url]);

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
