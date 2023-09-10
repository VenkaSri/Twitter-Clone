import React from "react";

import { useSelector } from "react-redux";

import { LoginPasswordInput } from "./LoginPasswordInput";
import { LoginForm } from "./LoginForm";

const LoginHome = () => {
  const doesUserExist = useSelector(
    (state) => state.rootReducer.loginState.doesUserExist
  );

  return <>{doesUserExist ? <LoginPasswordInput /> : <LoginForm />}</>;
};

export default LoginHome;
