import PropTypes from "prop-types";
import Skeleton from "@mui/material/Skeleton";
import { useState } from "react";
import { useProfilePicture } from "@/hooks/user/useProfilePicture";

const ProfilePicture = ({ size = 40, src }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const cachedImage = useProfilePicture(src);

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
    <div
      style={profilePicStyle}
      className="place-items-center grid cursor-pointer"
    >
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
  src: PropTypes.string,
};
