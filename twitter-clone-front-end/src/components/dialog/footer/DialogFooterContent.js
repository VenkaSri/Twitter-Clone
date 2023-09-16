import React from "react";

import { DialogFooterButton } from "../../DialogFooterButton";

export const DialogFooterContent = ({ text }) => {
  return (
    <DialogFooterButton
      text={text}
      className={`grow text-white font-cBold dark:text-black bg-black `}
    />
  );
};
