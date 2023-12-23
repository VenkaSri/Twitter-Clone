import clsx from "clsx";
import { SETTINGS_LINKS } from "./SETTINGSLINKS";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const SettingAndSupport = () => {
  const headerButtons = SETTINGS_LINKS.map((link) => {
    return (
      <SettingAndSupportLink
        key={link.name}
        text={link.name}
        path={link.path}
        icon={link.iconOutlined}
        isDisabled={link.name !== "Log out"}
      />
    );
  });

  return (
    <>
      <div className="tablet:self-start self-center">{headerButtons}</div>
    </>
  );
};

const SettingAndSupportLink = ({
  icon: Icon,
  text,
  visibility,
  path,
  isDisabled,
}) => {
  return (
    <Link
      to={path}
      className={clsx("w-full  flex  items-center p-3 h-[44px]", visibility, {
        "disabled-link": isDisabled,
      })}
      draggable={false}
    >
      <div>{<Icon className="w-[18.75px] dark:fill-white" />}</div>
      <div
        className={clsx(
          `leading-4 mr-4 ml-5 text-[15px] flex font-cBold dark:text-white`
        )}
      >
        <span>{text}</span>
      </div>
    </Link>
  );
};

SettingAndSupportLink.propTypes = {
  icon: PropTypes.func,
  text: PropTypes.string,
  visibility: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
};
