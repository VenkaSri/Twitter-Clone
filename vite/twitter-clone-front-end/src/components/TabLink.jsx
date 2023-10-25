import { useTheme } from "@/hooks/useTheme";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const TabLink = ({ text, isSelected, onClick, disabled }) => {
  const { currentColor } = useTheme();

  return (
    <button
      className={clsx("mainColumn--topNav-link", { "opacity-40": disabled })}
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
    </button>
  );
};

TabLink.propTypes = {
  isSelected: PropTypes.bool,
};
