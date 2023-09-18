import React from "react";

import { DialogFooterButton } from "../../DialogFooterButton";
import { useSelector } from "react-redux";
import {
  DISABLED_FOOTER_BUTTON,
  SKIPPABLE_FOOTER_BUTTON,
} from "../../../utils/constants/dialog/dialogConstants";
import { useNextActions } from "../../../hooks/signup/useNextActions";

export const DialogFooterContent = ({ text }) => {
  const isProfilePictureSet = useSelector(
    (state) => state.rootReducer.signUpState.didUserAddProfilePicture
  );

  const username = useSelector(
    (state) => state.rootReducer.signUpState.username
  );

  const { handleActions } = useNextActions();
  console.log(isProfilePictureSet);
  let styles = "";

  if (isProfilePictureSet) {
    text = "Next";
    styles = "button--footer-filled";
  } else {
    text = "Skip for now";
    styles = "button--footer-outline";
  }

  if (username === "") {
    text = "Skip for now";
    styles = "button--footer-outline";
  }

  return (
    <DialogFooterButton
      text={text}
      className={styles}
      onClick={handleActions}
    />
  );
};
