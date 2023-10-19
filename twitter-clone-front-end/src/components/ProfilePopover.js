import { Fade, ThemeProvider, Tooltip, createTheme } from "@mui/material";
import React from "react";
import ProfilePicture from "./ProfilePicture";
import { useGetUserByIDQuery } from "../services/user/userApi";
import { UserProfile } from "./UserProfile";

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
};

export const ProfilePopover = ({ children, userId }) => {
  const PopOverContent = () => {
    return (
      <div className="bg-white flex-col-container grow max-w-[300px]">
        <div className="flex grow">
          <ProfilePicture size={64} userId={userId.id} />
        </div>
        <div className="flex grow text-[15px]">
          <UserProfile userData={userId} />
        </div>
        <div className="flex grow text-[15px]">
          <span>{userId.bio}</span>
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
