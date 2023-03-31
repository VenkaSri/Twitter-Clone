import { combineReducers } from "@reduxjs/toolkit";

import signUpReducer from "./auth/signup-reducer";
import userInfoReducer from "../state/authentication/auth-reducer"

const rootReducer = combineReducers({
  signUp: signUpReducer,
  userInfo: userInfoReducer
})


export default rootReducer;