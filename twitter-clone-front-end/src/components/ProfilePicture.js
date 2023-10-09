import { Skeleton } from "@mui/material";
import React, { memo, useEffect, useState } from "react";

const ProfilePicture = ({ size = 44 }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [cachedImage, setCachedImage] = useState(null);

  useEffect(() => {
    const fetchAndCacheImage = async () => {
      try {
        const response = await fetch(
          "https://tc-profile-pictures.s3.amazonaws.com/profile-pictures/Untitled.jpg",
          {
            // Specify empty headers to avoid adding any Cache-Control headers.
            headers: {},
          }
        );
        if (response.ok) {
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob);
          setCachedImage(imageUrl);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchAndCacheImage();
  }, []);

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
