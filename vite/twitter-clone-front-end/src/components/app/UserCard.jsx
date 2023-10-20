import ProfilePicture from "@components/ProfilePicture";
import PropTypes from "prop-types";

const UserInfoCell = ({ options, showBio, userData }) => {
  console.log(userData);
  return (
    <div className="flex grow max-w-full">
      <div className="w-[40px] mr-3">
        <ProfilePicture />
      </div>
      <div className="flex flex-col overflow-hidden">
        <div className="flex  overflow-hidden items-center justify-between">
          <div className="flex flex-col overflow-hidden">
            <UserNameAndUsername
              displayName={userData.name}
              username={userData.username}
            />
          </div>
          {options || null}
        </div>
        {showBio && <UserBio />}
      </div>
    </div>
  );
};

const UserBio = () => {
  return (
    <div className="">
      <span className="text-[#0F1419] leading-5 font-cR text-[15px] dark:text-white ">
        Amidst the bustling city, a sense of tranquility prevails.
      </span>
    </div>
  );
};

const UserNameAndUsername = ({ displayName, username }) => {
  return (
    <div className="flex flex-col grow overflow-hidden  ">
      <div className="text-black dark:text-white break-words whitespace-nowrap text-ellipsis overflow-hidden font-cBold leading-5">
        <span>{displayName}</span>
      </div>
      <div className="text-[#71767B] break-words whitespace-nowrap text-ellipsis overflow-hidden font-cR leading-5">
        <span>@{username}</span>
      </div>
    </div>
  );
};

UserInfoCell.propTypes = {
  options: PropTypes.node,
  showBio: PropTypes.bool,
  userData: PropTypes.object,
};

UserNameAndUsername.propTypes = {
  displayName: PropTypes.string,
  username: PropTypes.string,
};

export default UserInfoCell;
