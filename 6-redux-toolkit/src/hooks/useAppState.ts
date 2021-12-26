import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux"
import type { RootState, AppDispatch } from "../stores/rootStore"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
