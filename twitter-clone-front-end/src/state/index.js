import { configureStore } from "@reduxjs/toolkit";

import nameReducer from "../state/auth/sign-up/StepOne";
import emailReducer from "./auth/sign-up/email-reducer";
import dobReducer from "./auth/sign-up/dob-reducer";


const store = configureStore({
  reducer: { name: nameReducer, email:emailReducer, dob:dobReducer},
});

export default store;
