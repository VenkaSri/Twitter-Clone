import PropTypes from "prop-types";
import Skeleton from "@mui/material/Skeleton";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useProfilePicture } from "@/hooks/useProfilePicture";

const ProfilePicture = ({ size = 40 }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const cachedImage = useProfilePicture();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const profilePicStyle = {
    width: size,
    height: size,
  };

  const imgStyle = {
    width: `calc(${size}px - 4px)`,
    height: `calc(${size}px - 4px)`,
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

export default ProfilePicture;

ProfilePicture.propTypes = {
  size: PropTypes.number,
};
