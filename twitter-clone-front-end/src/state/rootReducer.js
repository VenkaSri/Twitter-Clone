import { combineReducers } from "@reduxjs/toolkit";

import signUpReducer from "./auth/signup-reducer";
import userInfoReducer from "./user/userInfo-reducer";
import dialogStateReducer from "./dialog/dialogState-reducer";
import followReducer from "./follow/follow-reducer";
import globalReducer from "./app/global-reducer";
import loadingReducer from "./app/loading/dialog/signup/reducer";
import tweetReducer from "./app/home/tweet-reducer";
import appLoadingReducer from "./app/loading/loading-reducer";
import loginReducer from "./app/home/loginSlice";
import rootLoadingSlice from "./app/loading/rootLoadingSlice";

const rootReducer = combineReducers({
  signUp: signUpReducer,
  userInfo: userInfoReducer,
  dialogState: dialogStateReducer,
  followState: followReducer,
  globalState: globalReducer,
  tweetState: tweetReducer,
  loadingState: loadingReducer,
  loginState: loginReducer,
  appLoading: appLoadingReducer,
  rootLoading: rootLoadingSlice,
});

export default rootReducer;
