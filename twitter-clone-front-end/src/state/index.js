import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { postApi } from "../services/post/postApi";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    rootReducer,
    composedEnhancer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(postApi.middleware),
});

export default store;
