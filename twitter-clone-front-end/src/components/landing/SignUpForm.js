import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  appleOAuthButton,
  googleOAuthButton,
  createAccountButton,
  createDemoAccountButton,
} from "../../constants/buttonConstants";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../UI/button/Button";
import { useDispatch } from "react-redux";
import { unfollowDialogActions } from "../../state/dialog/dialogState-reducer";

import { createBrowserHistory } from "history";

export const SignUpForm = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.rootReducer.globalState.isDarkMode);
  const fillColor = dark ? "#fff" : "#000";
  const borderColor = dark ? "#2F3336" : "#f7f9f9";
  const dialogState = useSelector(
    (state) => state.rootReducer.dialogState.isDialogOpen
  );

  const handleCreateAccount = () => {
    dispatch(unfollowDialogActions.setDialogState(true));
    window.history.replaceState(
      null,
      "Sign up for Twitter / X",
      "/i/flow/signup"
    );
  };

  return (
    <div className="flex flex-col w-[300px]">
      <div className="flex flex-col gap-3">
        <Button buttonProps={googleOAuthButton} />
        <Button buttonProps={appleOAuthButton} />
      </div>
      <div className="flex items-center justify-center my-1">
        <div className={`flex-grow border-b border-[${borderColor}]`}></div>
        <div className={`px-2 font-cThin text-[15px] text-[${fillColor}]`}>
          or
        </div>
        <div className={`flex-grow border-b border-[${borderColor}]`}></div>
      </div>
      <div className="flex flex-col gap-3 mb-2">
        <Button
          buttonProps={createAccountButton}
          onClick={handleCreateAccount}
        />
        <Button buttonProps={createDemoAccountButton} />
      </div>
      <div>
        <p className="text-[11px] font-cReg text-[#71767B]">
          By signing up, you agree to the{" "}
          <a href="#" className="text-[#1D9BF0]">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#1D9BF0]">
            Privacy Policy
          </a>
          , including{" "}
          <a href="#" className="text-[#1D9BF0]">
            Cookie Use.
          </a>
        </p>
      </div>
    </div>
  );
};

// const dialogState = useSelector(
//   (state) => state.rootReducer.dialogState.isDialogOpen
// );
// const dispatch = useDispatch();

// const manualNavigation = useSelector(
//   (state) => state.rootReducer.dialogState.manualNavigation
// );
