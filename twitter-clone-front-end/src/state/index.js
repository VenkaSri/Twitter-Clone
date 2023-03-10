import { configureStore } from "@reduxjs/toolkit";

import nameReducer from "../state/auth/sign-up/name-reducer";
import emailReducer from "./auth/sign-up/email-reducer";
import dobReducer from "./auth/sign-up/dob-reducer";
import steponeReducer from "./auth/sign-up/stepone-reducer";
import stepsReducer from "./auth/form/steps-reducer";

const store = configureStore({
  reducer: {
    name: nameReducer,
    email: emailReducer,
    dob: dobReducer,
    stepOne: steponeReducer,
    steps: stepsReducer
  },
});

export default store;
