import React from "react";

const ProfilePicture = ({ source, size }) => {
  const profilePicStyle = {
    width: size,
    height: size,
  };

  return (
    <div style={profilePicStyle}>
      <img src={source} alt="user avatar" className="rounded-full" />
    </div>
  );
};

export default ProfilePicture;
