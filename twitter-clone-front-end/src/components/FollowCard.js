import React from "react";
import ProfilePicture from "./ProfilePicture";
import DefaultAvatar from "../assets/images/avatars/default_avi.png";
import FollowCardContent from "./FollowCardContent";

const FollowCard = ({ user }) => {
  return (
    <div className="card--follow ">
      <div className="mr-3   flex self-stretch">
        <ProfilePicture source={DefaultAvatar} size={44} />
      </div>
      <div className="flex grow ">
        <FollowCardContent user={user} withDescription />
      </div>
    </div>
  );
};

export default FollowCard;
