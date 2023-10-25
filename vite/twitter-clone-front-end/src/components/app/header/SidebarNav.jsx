import { useTheme } from "@/hooks/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LINKS } from "@components/app/header/navLinks";
import PropTypes from "prop-types";
import { useState } from "react";
import clsx from "clsx";

const SidebarNav = () => {
  const hide = useMediaQuery("(max-height:751px)");
  const [activeLink, setActiveLink] = useState("Home");

  const handleClick = (link) => {
    setActiveLink(link);
    console.log(link);
  };

  const headerButtons = LINKS.map((link) => {
    let visibility = "";

    if (link.name === "Bookmarks" && hide) {
      visibility = "hidden";
    }
    return (
      <HeaderButton
        key={link.name}
        icon={activeLink === link.name ? link.iconFilled : link.iconOutlined}
        text={link.name}
        visibility={visibility}
        onClick={handleClick}
        isActive={activeLink === link.name}
      />
    );
  });

  return (
    <>
      <nav className="tablet:self-start self-center">{headerButtons}</nav>
    </>
  );
};

export default SidebarNav;

const HeaderButton = ({ icon: Icon, text, visibility, onClick, isActive }) => {
  const padding = useMediaQuery("(max-height:850px)");

  return (
    <a
      className={`w-full  flex flex-col items-start ${visibility} ${
        padding ? "py-0" : "py-1"
      }`}
      onClick={() => onClick(text)}
    >
      <div className="header--link">
        <div>{<Icon className="w-[26.25px]" />}</div>
        <div
          className={clsx(
            `leading-6 mr-4 ml-5 text-[20px] tablet:flex hidden`,
            isActive ? "font-cBold" : "font-cR"
          )}
        >
          <span className="self-end">{text}</span>
        </div>
      </div>
    </a>
  );
};

HeaderButton.propTypes = {
  icon: PropTypes.func,
  text: PropTypes.string,
  visibility: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};