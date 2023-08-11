// IconUtility.js

import React from "react";
import Icons from "./icons"; // Adjust the import path accordingly

const getIcon = (iconName, options = {}) => {
  const icon = Icons[iconName];
  if (!icon) {
    console.warn(`Icon "${iconName}" not found.`);
    return null;
  }
  return React.cloneElement(icon, { style: { fill: options.fill } });
};

export default getIcon;
