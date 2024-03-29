import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@/services/authApi";
import themeSlice from "@state/themeSlice";
import userSlice from "@state/userSlice";
import authSlice from "@state/authSlice";
import { userApi } from "@services/userApi";
import { publicApi } from "@components/public/publicApi";
import { postApi } from "@services/postApi";
import snackbarSlice from "@state/snackbarSlice";
import appSlice from "./state/appSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [publicApi.reducerPath]: publicApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    themeSlice,
    userSlice,
    authSlice,
    snackbarSlice,
    appSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      publicApi.middleware,
      postApi.middleware
    ),
});
