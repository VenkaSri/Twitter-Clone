import useMediaQuery from "@mui/material/useMediaQuery";
import { LINKS } from "@components/app/header/navLinks";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

const SidebarNav = () => {
  const location = useLocation();
  const hide = useMediaQuery("(max-height:751px)");
  const [activeLink, setActiveLink] = useState("/" || "/home");

  console.log(activeLink);

  useEffect(() => {
    const activeLink = location.pathname;
    setActiveLink(activeLink);
  }, [location]);

  const handleClick = (link) => {
    console.log(link);
    setActiveLink(link);
  };

  const headerButtons = LINKS.map((link) => {
    let visibility = "";

    if (link.name === "Bookmarks" && hide) {
      visibility = "hidden";
    }
    return (
      <HeaderButton
        key={link.name}
        icon={activeLink === link.path ? link.iconFilled : link.iconOutlined}
        text={link.name}
        visibility={visibility}
        onClick={handleClick}
        isActive={activeLink === link.path}
        path={link.path}
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

const HeaderButton = ({
  icon: Icon,
  text,
  visibility,
  onClick,
  isActive,
  path,
}) => {
  const padding = useMediaQuery("(max-height:850px)");
  const location = useLocation();
  return (
    <Link
      to={path}
      className={`w-full  flex flex-col items-start ${visibility} ${
        padding ? "py-0" : "py-1"
      }`}
      onClick={() => onClick(location.pathname)}
      draggable={false}
    >
      <div className="header--link">
        <div>{<Icon className="w-[26.25px] dark:fill-white" />}</div>
        <div
          className={clsx(
            `leading-6 mr-4 ml-5 text-[20px] tablet:flex hidden`,
            isActive ? "font-cBold" : "font-cR"
          )}
        >
          <span className="self-end">{text}</span>
        </div>
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
};
