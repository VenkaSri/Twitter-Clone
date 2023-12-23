import ProfilePicture from "@/components/ProfilePicture";
import UserDisplayNameAndHandle from "@/components/UserDisplayNameAndHandle";
import { DownArrow, Plus } from "@/components/icons/Icons";
import { useSession } from "@/hooks/useSession";
import { appSliceActions } from "@/state/appSlice";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { DRAWER_LINKS } from "../navLinks";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { SettingAndSupport } from "./SettingsAndSupport";
import { useState } from "react";

export const MobileDrawer = ({ isOpen, toggleFunction }) => {
  const { profilePicture } = useSession();
  const { darkMode } = useSelector((state) => state.themeSlice.darkMode);

  return (
    <Drawer
      disableScrollLock={false}
      sx={{
        width: 280,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 280,
          boxSizing: "border-box",
          backgroundColor: darkMode ? "#fff" : "#000",
        },
        "& .MuiBackdrop-root": {
          backgroundColor: "#5b7083",
          opacity: "0.4 !important",
        },

        boxShadow: isOpen
          ? "rgba(217, 217, 217, 0.2) 0px 0px 5px, rgba(217, 217, 217, 0.25) 0px 1px 4px 1px"
          : "none",
      }}
      anchor="left"
      open={isOpen}
      onClose={toggleFunction}
    >
      <div className="p-4">
        <div className="flex justify-between items-center">
          <ProfilePicture src={profilePicture} />
          <div className="w-[30px] h-[30px]  rounded-full  relative border border-[#536471] opacity-50">
            <Plus className="w-[20px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:fill-white" />
          </div>
        </div>
        <div className=" flex-col overflow-hidden shrink-1 flex  mt-4">
          <UserDisplayNameAndHandle principleUser />
        </div>
        <div className="mt-4 text-[14px] dark:text-white opacity-50">
          <span>
            <span className="font-cBold "></span> Following
          </span>
          <span className="ml-2">
            <span className="font-cBold"></span> Followers
          </span>
        </div>
      </div>
      <div>
        <DrawerNav />
      </div>
      <div className="h-[1px] my-0.5 bg-[#2f3336] w-[89%] self-center"></div>
      <div>
        <OtherSettings />
      </div>
    </Drawer>
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
      <div
        className={clsx(
          `leading-6 mr-4 ml-5 text-[20px] flex font-cBold dark:text-white`
        )}
      >
        <span>{text}</span>
      </div>
    </Link>
  );
};

const OtherSettings = () => {
  const SETTINGS = [
    "Creator Studio",
    "Professional Tools",
    "Settings and Support",
  ];

  const headerButtons = SETTINGS.map((link) => {
    return (
      <OptionsLink
        key={link}
        text={link}
        isDisabled={link !== "Creator Studio" && link !== "Professional Tools"}
      />
    );
  });

  return (
    <>
      <div className="tablet:self-start self-center">{headerButtons}</div>
    </>
  );
};

// https://stackoverflow.com/questions/63691127/how-to-change-icon-when-accordion-summary-is-expanded

const OptionsLink = ({ text, isDisabled }) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      sx={{ backgroundColor: "transparent", height: 52 }}
      disabled={!isDisabled}
      disableGutters
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        expandIcon={
          <DownArrow
            className={clsx(
              "w-[20px]",
              expanded === "panel1" ? "fill-[#1d9bf0]" : "dark:fill-white"
            )}
          />
        }
        aria-controls="panel1a-content"
      >
        <div
          className={clsx(
            `leading-4 text-[15px] flex font-cBold dark:text-white`
          )}
        >
          <span>{text}</span>
        </div>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0, margin: 0 }}>
        {text === "Settings and Support" ? <SettingAndSupport /> : null}
      </AccordionDetails>
    </Accordion>
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

MobileDrawer.propTypes = {
  toggleFunction: PropTypes.func,
  isOpen: PropTypes.bool,
};
