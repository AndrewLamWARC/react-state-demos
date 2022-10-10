import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import type { RootState, store, TodoAction } from "../stores/store"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch = () => useDispatch<ThunkDispatch<typeof store, void, TodoAction>>()
