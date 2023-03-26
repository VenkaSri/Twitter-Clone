import { combineReducers } from "@reduxjs/toolkit";

import signUpReducer from "./auth/signup-reducer";

const rootReducer = combineReducers({
  signUp: signUpReducer
})


export default rootReducer;