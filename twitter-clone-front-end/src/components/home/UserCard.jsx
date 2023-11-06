import ProfilePicture from "@components/ProfilePicture";
import PropTypes from "prop-types";

const UserInfoCell = ({ options, showBio, userData }) => {
  return (
    <div className="flex grow max-w-full cursor-pointer hover:bg-[#F7F7F7]  dark:hover:bg-[#080808] p-3 w-full">
      <div className="w-[40px] mr-3">
        <ProfilePicture src={userData.profile_image_url} />
      </div>
      <div className="flex flex-col overflow-hidden grow">
        <div className="flex  overflow-hidden items-center justify-between">
          <div className="flex flex-col overflow-hidden">
            <UserNameAndUsername
              displayName={userData.name}
              username={userData.username}
            />
          </div>
          {options || null}
        </div>
        {showBio && <UserBio text={userData.bio} />}
      </div>
    </div>
  );
};

const UserBio = ({ text }) => {
  return (
    <>
      {text !== undefined && (
        <div className="mt-2">
          <span className="text-[#0F1419] leading-5 font-cR  dark:text-white ">
            {text}
          </span>
        </div>
      )}
    </>
  );
};

const UserNameAndUsername = ({ displayName, username }) => {
  return (
    <div className="flex flex-col grow overflow-hidden ">
      <div className="text-black dark:text-white break-words whitespace-nowrap text-ellipsis overflow-hidden font-cBold leading-5">
        <span>{displayName}</span>
      </div>
      <div className="text-[#71767B] break-words whitespace-nowrap text-ellipsis overflow-hidden font-cR leading-5 mt-0.5">
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

UserBio.propTypes = {
  text: PropTypes.string,
};

export default UserInfoCell;
