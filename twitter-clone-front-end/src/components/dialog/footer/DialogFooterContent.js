import React from "react";

import { DialogFooterButton } from "../../DialogFooterButton";
import { useSelector } from "react-redux";
import {
  DISABLED_FOOTER_BUTTON,
  SKIPPABLE_FOOTER_BUTTON,
} from "../../../utils/constants/dialog/dialogConstants";

export const DialogFooterContent = ({ text }) => {
  const isProfilePictureSet = useSelector(
    (state) => state.rootReducer.signUpState.didUserAddProfilePicture
  );

  return (
    <DialogFooterButton text={text} className={`${SKIPPABLE_FOOTER_BUTTON} `} />
  );
};
