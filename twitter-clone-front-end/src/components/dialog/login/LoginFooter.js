import React from "react";

import Button from "../../UI/button/Button";

export const LoginFooter = () => {
  const buttonInfo = {
    txtColor: "text-white dark:text-black",
    text: "Next",
    fontSize: "17px",
    className:
      "bg-black dark:bg-white dark:hover:bg-[#D7DBDC] hover:bg-[#272C30]",
  };

  const handledNext = () => {};
  return <Button buttonProps={buttonInfo} onClick={handledNext} />;
};
