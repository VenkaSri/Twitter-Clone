import React from "react";

export const InfoLabel = ({ text, style }) => {
  return (
    <div
      className={`text-[${style.color}] text-[${style.fontSize}px] leading-[${style.lineHeight}px] font-${style.fontFamily}`}
      style={{ marginBottom: style.marginB, fontWeight: style.weight }}
    >
      <span className="break-words">{text}</span>
    </div>
  );
};
