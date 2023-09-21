import React from "react";

const ProfilePicture = ({ source, size }) => {
  const profilePicStyle = {
    width: size,
    height: size,
  };

  const imgStyle = {
    width: `calc(${size}px - 4px)`, // Subtract 4px from the specified size for the img tag
    height: `calc(${size}px - 4px)`, // Subtract 4px from the specified size for the img tag
  };

  return (
    <div style={profilePicStyle} className="place-items-center grid ">
      <img
        src={source}
        alt="user avatar"
        className="rounded-full"
        style={imgStyle} // Apply the imgStyle to the img tag
      />
    </div>
  );
};

export default ProfilePicture;
