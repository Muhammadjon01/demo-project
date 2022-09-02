import { configureStore } from "@reduxjs/toolkit";
import { posts } from "../api/posts";

export const store = configureStore({
  reducer: {
    [posts.reducerPath]: posts.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(posts.middleware),
});
