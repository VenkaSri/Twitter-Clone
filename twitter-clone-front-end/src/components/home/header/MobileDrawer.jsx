import ProfilePicture from "@/components/ProfilePicture";
import UserDisplayNameAndHandle from "@/components/UserDisplayNameAndHandle";
import { Plus } from "@/components/icons/Icons";
import { useSession } from "@/hooks/useSession";
import { appSliceActions } from "@/state/appSlice";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { DRAWER_LINKS } from "./navLinks";

export const MobileDrawer = () => {
  const dispatch = useDispatch();
  const { profilePicture } = useSession();
  const openDrawer = useSelector((state) => state.appSlice.openDrawer);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch(appSliceActions.setOpenDrawer(!openDrawer));
  };

  console.log(openDrawer);
  return (
    <>
      <Drawer
        sx={{
          width: 280,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 280,
            boxSizing: "border-box",
          },
        }}
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer}
      >
        <div className="p-4">
          <div className="flex justify-between items-center">
            <ProfilePicture src={profilePicture} />
            <div className="w-[30px] h-[30px] br rounded-full  relative">
              <Plus className="w-[20px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
          <div className=" flex-col overflow-hidden shrink-1 flex  mt-4">
            <UserDisplayNameAndHandle principleUser />
          </div>
          <div className="mt-4 text-[14px]">
            <span>
              <span className="font-cBold">803</span> Following
            </span>
            <span className="ml-2">
              <span className="font-cBold">92</span> Followers
            </span>
          </div>
        </div>
        <div>
          <DrawerNav />
        </div>
      </Drawer>
    </>
  );
};

const DrawerNav = () => {
  const headerButtons = DRAWER_LINKS.map((link) => {
    return (
      <HeaderButton
        key={link.name}
        text={link.name}
        path={link.path}
        icon={link.iconOutlined}
        isDisabled={link.name !== "Home"}
      />
    );
  });

  return (
    <>
      <nav className="tablet:self-start self-center">{headerButtons}</nav>
    </>
  );
};

const HeaderButton = ({
  icon: Icon,
  text,
  visibility,
  onClick,
  path,
  isDisabled,
}) => {
  return (
    <Link
      to={path}
      className={clsx("w-full  flex  items-center p-3 h-[56px]", visibility, {
        "disabled-link": isDisabled,
      })}
      onClick={() => onClick(location.pathname)}
      draggable={false}
    >
      <div>{<Icon className="w-[26.25px] dark:fill-white" />}</div>
      <div className={clsx(`leading-6 mr-4 ml-5 text-[20px] flex font-cBold`)}>
        <span>{text}</span>
      </div>
    </Link>
  );
};

HeaderButton.propTypes = {
  icon: PropTypes.func,
  text: PropTypes.string,
  visibility: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
};
