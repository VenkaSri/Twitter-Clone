import ProfilePicture from "@/components/ProfilePicture";
import { RoundedIconButton } from "@/components/RoundedIconButton";
import RoundedTextButton from "@/components/RoundedTextButton";
import { DArrow, Ellipsis, Logo, Quill } from "@/components/icons/Icons";
import { POST_BUTTON_VALUE } from "@/constants/app";
import SidebarNav from "@/components/home/header/SidebarNav";
import useMediaQuery from "@mui/material/useMediaQuery";
import UserDisplayNameAndHandle from "@/components/UserDisplayNameAndHandle";
import { useTheme } from "@/hooks/useTheme";
import { useSession } from "@/hooks/useSession";
import { usePopover } from "@/hooks/post/usePopover";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="header--siderbar">
      <div className="flex flex-col">
        <div className="header--logo">
          <Logo className="w-[30px] dark:fill-white fill-black" />
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
  const { currentColor } = useTheme();
  return (
    <>
      <div
        className={` w-[90%]  tablet:self-start self-center shadow-sidebar-nav-post-button overflow-hidden rounded-full ${
          btnYMargin ? "my-1" : "my-4"
        }`}
      >
        <div className="tablet:block hidden">
          <RoundedTextButton
            text={POST_BUTTON_VALUE}
            className="min-h-[52px] min-w-[52px] text-17 leading-5 text-white"
            style={{ backgroundColor: currentColor }}
            disabled
          />
        </div>
      </div>
      <div className={`flex flex-col justify-center items-center `}>
        <div className="tablet:hidden block">
          <RoundedIconButton
            className="min-h-[52px] min-w-[52px] btn--primary"
            icon={<Quill className="w-6 fill-white" />}
          />
        </div>
      </div>
    </>
  );
};

const AccountMenu = () => {
  const { profilePicture } = useSession();
  const { handleShow, RenderPopover } = usePopover();
  const sx = {
    backgroundColor: "transparent",
    boxShadow:
      "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px",
    borderRadius: "16px",
    width: 300,
    maxHeight: 480,
    marginTop: "-80px",
  };
  return (
    <>
      <div
        className="my-3  flex items-center justify-center "
        onClick={(e) => handleShow(e)}
      >
        <div className="rounded-full max-w-full flex  tablet:grow p-3 dark:hover:bg-[#191919] hover:bg-[#0f1419]/[0.1] cursor-pointer  items-center">
          <div className="w-[40px]">
            <ProfilePicture src={profilePicture} />
          </div>
          <div className=" flex-col overflow-hidden shrink-1 tablet:flex hidden px-[15px]">
            <UserDisplayNameAndHandle principleUser />
          </div>
          <div className=" tablet:flex hidden ml-auto">
            <Ellipsis className="w-[20px] dark:fill-white" />
          </div>
        </div>
      </div>
      <RenderPopover sx={sx}>
        <AccountMenuHoverCard />
      </RenderPopover>
    </>
  );
};

const AccountMenuHoverCard = () => {
  const { username } = useSession();
  return (
    <>
      <div className="py-3 bg-white relative  flex flex-col">
        <div className="py-3 px-4 font-cBold hover:bg-[#f7f9f9]" role="button">
          <span>Add an exisiting account</span>
        </div>
        <Link to={"/logout"}>
          <div
            className="py-3 px-4 font-cBold hover:bg-[#f7f9f9]"
            role="button"
          >
            <span>Log out @{username}</span>
          </div>
        </Link>
      </div>
    </>
  );
};
