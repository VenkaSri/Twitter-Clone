import React from "react";

import { HeaderIcon } from "../HeaderIcon";
import { DialogHeaderIcon } from "./DialogHeaderIcon";
import { useDispatch } from "react-redux";
import { setDialogContent } from "../../../state/dialog/dialogSlice";
import { signupSliceActions } from "../../../state/app/home/signupSlice";

export const DialogHeaderContent = ({ content, icon, button }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(signupSliceActions.setDidUserAddProfilePicture(true));
    dispatch(setDialogContent("upload_profile_picture"));
  };
  return (
    <>
      {icon && <DialogHeaderIcon step={0} />}
      <div className="flex flex-grow h-full justify-center items-stretch flex-col">
        {content}
      </div>
      {button && (
        <div
          className="flex-col-container min-h-[32px] min-w-[32px] self-stretch justify-center items-center cursor-pointer"
          onClick={handleClick}
        >
          <div className="min-h-[32px] min-w-[32px] rounded-full px-4 bg-black flex justify-center items-center leading-5 border border-black  font-cReg text-[15px]">
            <span className="text-white font-bold">Apply</span>
          </div>
        </div>
      )}
    </>
  );
};
