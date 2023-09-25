import { combineReducers } from "@reduxjs/toolkit";

import userInfoReducer from "./user/userInfo-reducer";
import followReducer from "./follow/follow-reducer";
import loginReducer from "./auth/loginSlice";
import signUpSlice from "./auth/signupSlice";
import userSlice from "./user/userSlice";
import dialogSlice from "./dialog/dialogSlice";
import profileSlice from "./profile/profileSlice";
import themeSlice from "./theme/themeSlice";

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  followState: followReducer,
  loginState: loginReducer,
  signUpState: signUpSlice,
  userSession: userSlice,
  dialogSlice: dialogSlice,
  profileSlice: profileSlice,
  themeSlice: themeSlice,
});

export default rootReducer;
