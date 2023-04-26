import React from "react";
import axios from "axios";
import Button from "./UI/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { unfollowDialogActions } from "../state/dialog/dialogState-reducer";
import { useUserData } from "../hooks/user-data";
import { userInfoActions } from "../state/user/userInfo-reducer";

const unFollowBtn = {
  height: 44,
  width: 256,
  bgColor: "#000",
  text: "Unfollow",
  txtColor: "#FFF",
  hoverBgColor: "#272c30",
};

const cancelBtn = {
  height: 44,
  width: 256,
  bgColor: "#FFF",
  text: "Cancel",
  txtColor: "#000",
  brdColor: "#d3dce1",
  hoverBgColor: "#e7e7e8",
};

const UnfollowDialog = () => {
  const dispatch = useDispatch();
  const username = useSelector(
    (state) => state.rootReducer.dialogState.selectUser
  );
  const { userEmail } = useUserData();
  const handleClose = () => {
    dispatch(unfollowDialogActions.cancelDialog(false));
  };

  const handleUnfollow = () => {
    axios
      .delete(
        process.env.REACT_APP_FOLLOW_ACCOUNT +
          `?followerEmail=${userEmail}&followedUsername=${username}`
      )
      .then(() => {
        dispatch(userInfoActions.setOneFollowingValidity(false));
        dispatch(unfollowDialogActions.cancelDialog(false));
        dispatch(unfollowDialogActions.setIsUnfollowed(true));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="p-[32px] flex flex-col">
      <h1 className="font-cBold text-[20px] ">Unfollow @{username}?</h1>
      <p className="font-cReg text-[#536471] text-[15px] leading-5 mt-2">
        Their Tweets will no longer show up in your home timeline. You can still
        view their profile, unless their Tweets are protected.
      </p>
      <div className="grow flex flex-col gap-[10px] mt-[20px] ">
        <Button buttonProps={unFollowBtn} onClick={handleUnfollow} />
        <Button buttonProps={cancelBtn} onClick={handleClose} />
      </div>
    </div>
  );
};

export default UnfollowDialog;
