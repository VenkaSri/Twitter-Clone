import Head from "@/components/head/Head";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import RoundedTextAndIconButton from "@/components/RoundedTextAndIconButton";
import { Apple, Close, GoogleIcon, Logo } from "@/components/icons/Icons";
import CustomTextField from "@/components/CustomTextField";
import RoundedTextButton from "@/components/RoundedTextButton";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { RegisterContext } from "@/context/auth/register-context";
import { LoginContext } from "@/context/auth/login-context";
import { useDoesUserExistQuery } from "@/services/authApi";

import { CustomSnackbar } from "@/components/CustomSnackbar";

import openSnackbar, { snackbarSliceActions } from "@state/snackbarSlice";
import { useDispatch, useSelector } from "react-redux";

export const LoginHome = () => {
  const { setStep } = useContext(RegisterContext);
  const { setUsername, username } = useContext(LoginContext);
  const [isChecking, setIsChecking] = useState(false);
  const { isSuccess, data } = useDoesUserExistQuery(username, {
    skip: isChecking,
  });

  const dispatch = useDispatch();
  const { isOpen, message } = useSelector((state) => state.snackbarSlice);

  const handleLogin = () => {
    if (username.length !== 4) {
      // setIsChecking(true);
      // Dispatch the action to open the snackbar with a message
      dispatch(
        snackbarSliceActions.openSnackbar({
          message: "Username must be 4 characters long",
        })
      );
    }
  };

  // useEffect(() => {

  // }, [])

  return (
    <>
      <Head title="Log in to X" />
      <Heading />
      <DialogContent
        className="w-full max-w-[600px] mx-auto  flex flex-col relative dark:bg-black"
        sx={{
          "&.MuiDialogContent-root": {
            padding: 0,
            overflow: "",
          },
        }}
      >
        <div
          className={`overflow-auto
flex flex-col items-stretch basis-full flex-grow bg-[#fff] dark:bg-[#000]`}
        >
          <div className="flex flex-col pb-12 min-w-[364px] max-w-[364px] px-8 mx-auto ">
            <div className="flex flex-col ">
              <div className="flex flex-col my-5">
                <h1 className="text-[31px] leading-8 font-cBold break-words inline dark:text-[#fff]">
                  <span>Sign in to X</span>
                </h1>
              </div>
            </div>
            <div className="my-3">
              <RoundedTextAndIconButton
                text="Sign in with Google"
                className="h-[44px] bg-white text-black"
                // onClick={handleCreateAccount}
                icon={<GoogleIcon className="w-[18px]  mr-1" />}
                iconPosition="start"
                disabled
              />
            </div>
            <div className="my-3">
              <RoundedTextAndIconButton
                text="Sign in with Apple"
                className="h-[44px] bg-white text-black"
                // onClick={handleCreateAccount}
                icon={<Apple className="w-[20px] mr-1" />}
                iconPosition="start"
                disabled
              />
            </div>
            <div className="flex items-center justify-center my-1">
              <div
                className={`flex-grow  dark:border-b dark:border-[#3c3e42] border-b border-[#e2e9ec]`}
              ></div>
              <div className={`px-2 font-cThin text-[15px] dark:text-[#fff]`}>
                or
              </div>
              <div
                className={`flex-grow dark:border-b dark:border-[#3c3e42] border-b border-[#e2e9ec]`}
              ></div>
            </div>
            <div className="py-3 flex flex-col">
              <CustomTextField
                label="Phone, email or username"
                onChange={setUsername}
              />
            </div>
            <div className="my-3">
              <RoundedTextButton
                text="Next"
                className="btn--action h-[36px]"
                onClick={handleLogin}
              />
            </div>
            <div className="my-3">
              <RoundedTextButton
                text="Forgot password?"
                className="btn--skip h-[36px]"
                // onClick={handleCreateAccount}
              />
            </div>
            <div className="text-[#536471] text-[15px] mt-[40px] leading-5 font-cR">
              <span>
                Don't have an account?{" "}
                <Link to={"/i/flow/signup"} onClick={() => setStep(-1)}>
                  <span className="text-[#1d9bf0] hover:underline">
                    Sign up
                  </span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
      <CustomSnackbar message={message} isOpen={isOpen} />
    </>
  );
};

const Heading = () => {
  return (
    <DialogTitle style={{ padding: 0 }}>
      <div className="h-[53px] flex bg-[#fff] dark:bg-[#000] px-[16px] relative">
        <div
          className={clsx(
            `min-w-[56px] min-h-[32px] self-stretch flex items-start justify-center flex-col`
          )}
        >
          <div
            // onClick={onClick}
            className="min-w-[36px] min-h-[36px] rounded-full flex flex-col cursor-pointer items-center justify-center -ml-2 
        dark:fill-white dark:hover:bg-[#191919] hover:bg-[#E6E7E7]"
          >
            <Close className="w-5" />
          </div>
        </div>

        <div className="flex h-full justify-center  flex-col absolute inset-0 ">
          <div className="flex flex-col items-center shrink-0 ">
            <Logo className="w-10 dark:fill-white" />
          </div>
        </div>
      </div>
    </DialogTitle>
  );
};
