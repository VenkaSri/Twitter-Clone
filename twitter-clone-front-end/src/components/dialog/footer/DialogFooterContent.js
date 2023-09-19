import React from "react";

import { DialogFooterButton } from "../../DialogFooterButton";
import { useFooterButtonConfig } from "../../../hooks/signup/useFooterButtonConfig";

export const DialogFooterContent = ({ text, step, profileStep }) => {
  const { buttonText, buttonClassName, isButtonDisabled, buttonAction } =
    useFooterButtonConfig(step, profileStep);

  return (
    <DialogFooterButton
      text={buttonText}
      className={buttonClassName}
      onClick={buttonAction}
      disabled={isButtonDisabled}
    />
  );
};
