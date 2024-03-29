import { useTheme } from "@/hooks/useTheme";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { RoundedIconButton } from "./RoundedIconButton";
import { Gear } from "./icons/Icons";

export const TabLink = ({
  text,
  isSelected,
  onClick,
  disabled,
  icon: Icon,
}) => {
  const { currentColor } = useTheme();

  return (
    <a
      className={clsx("mainColumn--topNav-link", { "disabled-link": disabled })}
      data-tab-type={text}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex flex-col grow">
        <div
          className={`flex grow justify-center items-center font-medium ${
            isSelected ? "font-cBold" : "font-cMed"
          }`}
        >
          {text}
        </div>
        {isSelected && (
          <div
            style={{ backgroundColor: currentColor }}
            className={`h-1 rounded-full bg-[red]`}
          ></div>
        )}
      </div>
    </a>
  );
};

TabLink.propTypes = {
  isSelected: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
