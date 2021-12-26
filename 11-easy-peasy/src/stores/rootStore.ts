import { createStore, createTypedHooks } from "easy-peasy"
import { todoStore } from "./todoStore"
export const rootStore = createStore({
  todos: todoStore
  // Other stores here
})

const typedHooks = createTypedHooks<typeof rootStore>()

export const useRootStoreActions = typedHooks.useStoreActions
export const useRootStoreState = typedHooks.useStoreState
export const useRootStoreDispatch = typedHooks.useStoreDispatch
