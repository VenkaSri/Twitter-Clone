import { combineReducers } from "@reduxjs/toolkit";

import signUpReducer from "./auth/signup-reducer";
import userInfoReducer from "./authentication/userInfo-reducer";
import dialogStateReducer from "./dialog/dialogState-reducer";
import followReducer from "./follow/follow-reducer";

const rootReducer = combineReducers({
  signUp: signUpReducer,
  userInfo: userInfoReducer,
  dialogState: dialogStateReducer,
  followState: followReducer,
})


export default rootReducer;