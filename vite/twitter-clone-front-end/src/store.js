import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@components/auth/authApi";
import themeSlice from "@state/themeSlice";
import userSlice from "@state/userSlice";
import { userApi } from "./services/userApi";
import { publicApi } from "./components/public/publicApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [publicApi.reducerPath]: publicApi.reducer,
    themeSlice,
    userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      publicApi.middleware
    ),
});
