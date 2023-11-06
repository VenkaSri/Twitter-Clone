import { Fade, ThemeProvider, Tooltip, createTheme } from "@mui/material";
import ProfilePicture from "./ProfilePicture";
import UserDisplayNameAndHandle from "./UserDisplayNameAndHandle";

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          width: 300,
          backgroundColor: "white",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          borderRadius: "8px",
          padding: 12,
        },
      },
    },
  },
});

const userDetails = {
  id: 7,
  name: "JohnDoe",
  username: "JohnDoe",
  email: "johndoe@example.com",
  profile_image_url: null,
  bio: "bio",
};

export const ProfilePopover = ({ children, userId }) => {
  const PopOverContent = () => {
    return (
      <div className="bg-white flex-col-container grow max-w-[300px]">
        <div className="flex grow">
          <ProfilePicture size={64} src={userDetails.profile_image_url} />
        </div>
        <div className="flex grow text-[15px]">
          <UserDisplayNameAndHandle userData={userId} />
        </div>
        <div className="flex grow text-[15px]">
          <span>{userDetails.bio}</span>
        </div>
        <div className="flex grow text-[15px]">
          <div>
            <span>{userId.followingCount} Following</span>
          </div>
          <div>{userId.followerCount} Followers</div>
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
