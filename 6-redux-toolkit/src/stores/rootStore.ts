import { configureStore } from "@reduxjs/toolkit"
import { todoReducer } from "./todoStore"
export const rootStore = configureStore({
  reducer: {
    todos: todoReducer
    // Other state reducers here
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootStore.dispatch
