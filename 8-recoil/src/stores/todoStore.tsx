import { atom, atomFamily, selector } from "recoil"

// 1. Define shape of the state
export type Todo = {
  readonly id: string
  text: string
  done: boolean
}

//--- State management with Recoil
// Define the atoms of state
export const todoState = atom<Todo[]>({
  key: "todoState",
  default: []
})

export const todoDoneState = atomFamily<boolean, string>({
  key: "todoDoneState",
  default: false
})

export const todoTextState = atomFamily<string, string>({
  key: "todoTextState",
  default: ""
})

export const todoRemoteState = selector({
  key: "todoRemoteState",
  get: async () => {
    const resp = await fetch(
      "https://gist.githubusercontent.com/AndrewLamWARC/06226afcc5c45bd8eb45d10aabc76f30/raw/todos.json"
    )
    const todos: Todo[] = await resp.json()
    return todos
  }
})
