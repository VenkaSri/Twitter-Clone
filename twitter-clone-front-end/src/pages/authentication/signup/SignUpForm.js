import React, { useContext } from "react";

import SVG from "../../../components/UI/app/SVG";
import FormModalContext from "../../../context/modals/form-modal-context";
import { CLOSE, LOGO } from "../../../utils/ButtonLinkObjects";
import { google, apple } from "../../../utils/SignInButtonObjects";
import SignInButton from "../../../components/UI/explore/sign-in-links/SignInButton";
import { APPLE } from "../../../utils/ButtonLinkObjects";
import SignUpHome from "../../../components/authentication/signup/SignUpHome";

const SignUpForm = () => {
  const ctx = useContext(FormModalContext);

  return (
    <div className="flex flex-col ">
      <SignUpHome />
    </div>
  );
};

export default SignUpForm;
