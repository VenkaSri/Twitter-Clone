import React from "react";

export const CustomText = ({
  fontSize,
  lineHeight,
  fontWeight,
  color,
  text,
  additionalClasses,
}) => {
  const style = `font-cHeavy text-[${fontSize}] leading-[${lineHeight}] font-${fontWeight} text-[${color}] ${additionalClasses}`;
  return <span className={style}>{text}</span>;
};
