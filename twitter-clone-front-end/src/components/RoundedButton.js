import React from "react";

const RoundedButton = ({ styles, btnContent }) => {
  return <a className={`${styles} button--rounded`}>{btnContent}</a>;
};

export default RoundedButton;
