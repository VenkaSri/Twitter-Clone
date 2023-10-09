import React, { useEffect, useState } from "react";
import getIcon from "../utils/icons/iconsutil";

import clsx from "clsx";
import { useTheme } from "../hooks/useTheme";
import { THEME_COLORS } from "../constants";

export const MoreButton = ({ className }) => {
  const { darkMode } = useTheme();

  return (
    <div className="button--more group">
      {getIcon("Ellipsis", {
        height: 18.75,
        className: `group-hover:fill-[var(--primary-color)] ${
          darkMode ? "fill-[#71767b]" : "fill-[#536471]"
        } `,
      })}
    </div>
  );
};
