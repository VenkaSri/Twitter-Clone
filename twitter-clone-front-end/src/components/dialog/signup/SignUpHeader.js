import React from "react";

import { useMediaQuery } from "@mui/material";
import getIcon from "../../UI/icons/iconsutil";
import { HeaderIcon } from "../HeaderIcon";
import IconButton from "../../UI/button/IconButton";
import { resetActions } from "../../../state/auth/sign-up/reset-reducer";
import { useDispatch, useSelector } from "react-redux";
import { unfollowDialogActions } from "../../../state/dialog/dialogState-reducer";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { NUM_OF_SIGNUP_STEPS } from "../../../constants";

const SignUpHeader = () => {
  const fullScreen = useMediaQuery("(max-width:702px)");
  const dispatch = useDispatch();
  const darkMode = useDarkMode();

  const currentStep = 1;

  const handleReset = () => {
    dispatch(resetActions.resetAll());
    dispatch(unfollowDialogActions.setDialogState(false));
    // window.history.replaceState(null, null, "/");
  };

  return (
    <>
      <div className="min-h-[32px] self-stretch flex items-start justify-center flex-col">
        <div className="min-w-[36px] min-h-[36px] rounded-full flex flex-col cursor-pointer items-center justify-center -ml-2">
          <IconButton
            onClick={handleReset}
            type={"Close"}
            options={{
              className:
                "dark:fill-white dark:hover:bg-[#191919] hover:bg-[#E6E7E7] ",
              width: 20,
              height: 20,
            }}
          />
        </div>
      </div>
      <div className="flex flex-grow h-full justify-center items-stretch flex-col">
        <div className="flex flex-col items-start shrink-0 ">
          <h2 className="py-0.5 text-xl leading-6 font-cMed font-bold dark:text-[#fff]">
            <span>
              Step {currentStep} of {NUM_OF_SIGNUP_STEPS}
            </span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default SignUpHeader;
