import Head from "@/components/head/Head";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {
  Close,
  Logo,
  Visibility,
  VisibilityOff,
} from "@/components/icons/Icons";
import CustomTextField from "@/components/CustomTextField";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { RegisterContext } from "@/context/auth/register-context";
import { LoginContext } from "@/context/auth/login-context";
import { useLoginMutation } from "@/services/authApi";

import { CustomSnackbar } from "@/components/CustomSnackbar";
import InputAdornment from "@mui/material/InputAdornment";
import { snackbarSliceActions } from "@state/snackbarSlice";
import { useDispatch, useSelector } from "react-redux";
import DialogContentHeading from "@/components/dialog/body/DialogBodyHeading";
import DialogFooter from "../../DialogFooter";

export const LoginPassword = () => {
  const { username } = useContext(LoginContext);

  const [login, { isSuccess: loggedIn, isLoading: loggingIn, data: userData }] =
    useLoginMutation();

  const { setPassword, password } = useContext(LoginContext);
  const dispatch = useDispatch();
  const { isOpen, message } = useSelector((state) => state.snackbarSlice);

  const handleLogin = async () => {
    if (password.length < 8) {
      dispatch(
        snackbarSliceActions.openSnackbar({
          message: "Wrong password!",
        })
      );
    } else {
      const form = JSON.stringify({
        usernameOrEmailOrPhonenumber: username,
        password: password,
      });
      await login(form);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      window.location.reload();
    }
  }, [loggingIn, loggedIn, dispatch, userData]);

  const { showPassword, setShowPassword } = useContext(RegisterContext);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const PasswordEndornment = () => {
    return (
      <div
        role="button"
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
      >
        {showPassword ? <Visibility /> : <VisibilityOff />}
      </div>
    );
  };

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
          <div
            className={` mobile:px-20 px-8 shrink-0 flex flex-col mb-2 grow`}
          >
            <DialogContentHeading text="Enter your password" />
            <div className="flex flex-col py-3">
              <div className="flex flex-col grow ">
                <CustomTextField
                  label="Username"
                  defaultValue={username}
                  readonly
                />
              </div>
              <div className="flex flex-col py-3">
                <div className="flex flex-col grow ">
                  <CustomTextField
                    label="Password"
                    type="password"
                    maxLength={50}
                    onChange={setPassword}
                    endAdornment={
                      <InputAdornment position="end">
                        {<PasswordEndornment />}
                      </InputAdornment>
                    }
                    showPassword={showPassword}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogFooter login onClick={handleLogin} />
      <CustomSnackbar message={message} isOpen={isOpen} />
    </>
  );
};

const Heading = () => {
  const navigate = useNavigate();
  const { resetLoginState } = useContext(LoginContext);

  const handleClose = () => {
    navigate("/");
    resetLoginState();
  };
  return (
    <DialogTitle style={{ padding: 0 }}>
      <div className="h-[53px] flex bg-[#fff] dark:bg-[#000] px-[16px] relative ">
        <div
          className={clsx(
            `min-w-[56px] min-h-[32px] self-stretch flex items-start justify-center flex-col z-[2]`
          )}
        >
          <div
            onClick={handleClose}
            className="min-w-[36px] min-h-[36px] rounded-full flex flex-col cursor-pointer items-center justify-center -ml-2 
        dark:fill-white dark:hover:bg-[#191919] hover:bg-[#E6E7E7]"
          >
            <Close className="w-5" />
          </div>
        </div>

        <div className="flex h-full justify-center  flex-col absolute inset-0 z-[1]">
          <div className="flex flex-col items-center shrink-0 ">
            <Logo className="w-10 dark:fill-white" />
          </div>
        </div>
      </div>
    </DialogTitle>
  );
};
