import React from "react";

const ProfilePicture = ({ source, size }) => {
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
      <img
        src={source}
        alt="user avatar"
        className="rounded-full"
        style={imgStyle}
      />
    </div>
  );
};

export default ProfilePicture;
