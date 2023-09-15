// IconUtility.js

import React from "react";
import Icons from "./icons"; // Adjust the import path accordingly

const getIcon = (iconName, options = {}) => {
  const icon = Icons[iconName];
  console.log(iconName);
  if (!icon) {
    console.warn(`Icon "${iconName}" not found.`);
    return null;
  }
  return React.cloneElement(icon, {
    className: options.className,
    style: {
      fill: options.fill,
      margin: options.margin,
      padding: options.padding,
      height: options.height,
      width: options.width,
      maxHeight: options.maxHeight,
      maxWidth: options.maxWidth,
    },
  });
};

export default getIcon;
