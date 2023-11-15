import { combineReducers } from "@reduxjs/toolkit";

import signUpReducer from "./auth/signup-reducer";
import userInfoReducer from "./user/userInfo-reducer";
import dialogStateReducer from "./dialog/dialogState-reducer";
import followReducer from "./follow/follow-reducer";
import globalReducer from "./app/global-reducer";
import tweetReducer from "./app/home/tweet-reducer";

const rootReducer = combineReducers({
  signUp: signUpReducer,
  userInfo: userInfoReducer,
  dialogState: dialogStateReducer,
  followState: followReducer,
  globalState: globalReducer,
  tweetState: tweetReducer,
});

export default rootReducer;
