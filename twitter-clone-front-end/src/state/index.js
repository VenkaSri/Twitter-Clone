import { configureStore } from "@reduxjs/toolkit";

import nameReducer from "../state/auth/sign-up/StepOne";


const store = configureStore({
  reducer: { name: nameReducer},
});

export default store;
