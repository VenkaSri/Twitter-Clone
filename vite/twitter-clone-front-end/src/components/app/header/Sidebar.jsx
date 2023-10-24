import ProfilePicture from "@/components/ProfilePicture";
import { RoundedIconButton } from "@/components/RoundedIconButton";
import RoundedTextButton from "@/components/RoundedTextButton";
import { Ellipsis, Logo, Quill } from "@/components/icons/Icons";
import { POST_BUTTON_VALUE } from "@/constants/app";
import { useTheme } from "@/hooks/useTheme";
import SidebarNav from "@components/app/header/SidebarNav";
import useMediaQuery from "@mui/material/useMediaQuery";
import clsx from "clsx";
import UserInfoCell from "../UserCard";

const Sidebar = () => {
  const { darkMode } = useTheme();

  return (
    <div className="header--siderbar">
      <div className="flex flex-col">
        <div className="header--logo">
          <Logo className="w-[30px] dark:fill-white" />
        </div>
        <SidebarNav />
        <NewPostButton />
      </div>
      <AccountMenu />
    </div>
  );
};

export default Sidebar;

const NewPostButton = () => {
  const btnYMargin = useMediaQuery("(max-height:900px)");
  return (
    <>
      <div
        className={`header--button-wrapper shadow-nav-post-button-shadow overflow-hidden rounded-full ${
          btnYMargin ? "my-1" : "my-4"
        }`}
      >
        <div className="tablet:block hidden">
          <RoundedTextButton
            text={POST_BUTTON_VALUE}
            className="header--newPostButton"
          />
        </div>
      </div>
      <div className={`centered-column-container header--button-wrapper`}>
        <div className="tablet:hidden block">
          <RoundedIconButton
            className={clsx("header--newPostButton button--rounded")}
            icon={<Quill className="w-6 fill-white" />}
          />
        </div>
      </div>
    </>
  );
};
const AccountMenu = () => {
  const darkMode = useTheme();
  return (
    <>
      <div className="my-3  flex items-center justify-center ">
        <div className="rounded-full max-w-full flex grow p-3 dark:hover:bg-[#191919] hover:bg-[var(--primary-hov-bg-color)] cursor-pointer  items-center">
          <div className="w-[40px]">
            <ProfilePicture />
          </div>
          <div className="flex flex-col overflow-hidden shrink-1 tablet:block hidden">
            {/* <UserInfoCell isAuthUser /> */}
          </div>
          <div className=" tablet:flex hidden ml-auto">
            <Ellipsis />
          </div>
        </div>
      </div>
    </>
  );
};
