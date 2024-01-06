import { Fade, ThemeProvider, Tooltip, createTheme } from "@mui/material";
import ProfilePicture from "./ProfilePicture";
import UserDisplayNameAndHandle from "./UserDisplayNameAndHandle";
import { FollowAndFollowingCount } from "./FollowAndFollowingCount";
import PropTypes from "prop-types";

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          width: 300,
          "@media (prefers-color-scheme: dark)": {
            backgroundColor: "black",
          },
          boxShadow:
            "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
          borderRadius: "8px",
          margin: 0,
        },
      },
    },
  },
});

export const ProfilePopover = ({ children, userDetails }) => {
  const PopOverContent = () => {
    return (
      <div className="bg-white flex flex-col grow max-w-[300px] dark:bg-black gap-2">
        <div className="flex grow">
          <ProfilePicture size={64} src={userDetails.profile_image_url} />
        </div>
        <div className="flex grow text-[15px]">
          <UserDisplayNameAndHandle
            userDisplayName={userDetails.name}
            userHandle={userDetails.username}
          />
        </div>
        <div className="flex grow text-[15px]">
          <span>{userDetails.bio}</span>
        </div>
        <div className="flex grow text-[15px]">
          <FollowAndFollowingCount
            followers={userDetails.followerCount}
            following={userDetails.followingCount}
          />
        </div>
      </div>
    );
  };
  return (
    <ThemeProvider theme={theme}>
      {" "}
      <Tooltip title={<PopOverContent />} TransitionComponent={Fade}>
        {children}
      </Tooltip>
    </ThemeProvider>
  );
};

ProfilePopover.propTypes = {
  children: PropTypes.node,
  userDetails: PropTypes.object,
};
