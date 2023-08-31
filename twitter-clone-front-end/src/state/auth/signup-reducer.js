import { combineReducers } from "redux";

import nameReducer from "./sign-up/name-reducer";
import emailReducer from "./sign-up/email-reducer";
import dobReducer from "./sign-up/dob-reducer";
import steponeReducer from "./sign-up/stepone-reducer";
import stepsReducer from "./form/steps-reducer";
import passwordReducer from "./sign-up/password-reducer";
import apiReducer from "./form/api-reducer";
import usernameReducer from "./sign-up/username-reducer";

const signUpReducer = combineReducers({
  name: nameReducer,
  email: emailReducer,
  dob: dobReducer,
  stepOne: steponeReducer,
  steps: stepsReducer,
  password: passwordReducer,
  api: apiReducer,
  username: usernameReducer,
});

export default signUpReducer;
