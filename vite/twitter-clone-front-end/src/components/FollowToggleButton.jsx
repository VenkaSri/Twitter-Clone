import RoundedTextButton from "@components/RoundedTextButton";
import PropTypes from "prop-types";
import { useFollowUserMutation, useUnfollowUserMutation } from "./user/userApi";
import { useState } from "react";

const FollowToggleButton = ({ id }) => {
  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();
  const [buttonText, setButtonText] = useState("Follow");
  const [buttonStyle, setButtonStyle] = useState("btn--action ");
  const [followedIDs, setFollowedIDs] = useState([]);

  const removeId = (idToRemove) => {
    setFollowedIDs(() => {
      const updatedFollowedUserIds = followedIDs.filter(
        (id) => id !== idToRemove
      );
      return updatedFollowedUserIds;
    });
  };

  const onMouseEnter = () => {
    console.log("hello");
  };

  const handleFollowUser = () => {
    if (followedIDs.includes(id)) {
      unfollowUser(id);
      setButtonText("Follow");
      setButtonStyle("btn--action");
      removeId(id);
    } else {
      followUser(id);
      setFollowedIDs((prevIds) => [...prevIds, id]);
      setButtonText("Following");
      setButtonStyle("btn--unfollow");
    }
  };

  return (
    <div className="ml-3 self-start" onMouseEnter={onMouseEnter}>
      <RoundedTextButton
        text={buttonText}
        className={`${buttonStyle} flex min-h-[32px] min-w-[32px] rounded-full px-3`}
        onClick={handleFollowUser}
      />
    </div>
  );
};

export default FollowToggleButton;

FollowToggleButton.propTypes = {
  id: PropTypes.number,
};
