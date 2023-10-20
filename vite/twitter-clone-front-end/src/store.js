import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@components/auth/authApi";
import themeSlice from "@state/themeSlice";
import userSlice from "@state/userSlice";
import { userApi } from "./components/user/userApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    themeSlice,
    userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});
