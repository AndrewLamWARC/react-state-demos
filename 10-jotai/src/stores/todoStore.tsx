import { atom } from "jotai"
import { v4 } from "uuid"

export type { Todo }
export { todoState, asyncTodoState, addTodoAtom, updateTodoAtom, deleteTodoAtom, toggleTodoAtom, loadTodosAtom }

type Todo = {
  id: string
  text: string
  done: boolean
}

//--- State management with jotai
const todoState = atom<Todo[]>([])
const asyncTodoState = atom(async (get) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return get(todoState)
})

const addTodoAtom = atom(
  (get) => get(todoState),
  (get, set, text: string) => set(todoState, [...get(todoState), { id: v4(), text, done: false }])
)

const updateTodoAtom = atom(
  (get) => get(todoState),
  (get, set, todo: Todo) =>
    set(
      todoState,
      get(todoState).map((t) => (t.id === todo.id ? todo : t))
    )
)

const deleteTodoAtom = atom(
  (get) => get(todoState),
  (get, set, id: string) =>
    set(
      todoState,
      get(todoState).filter((t) => t.id !== id)
    )
)

const toggleTodoAtom = atom(
  (get) => get(todoState),
  (get, set, id: string) =>
    set(
      todoState,
      get(todoState).map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    )
)

// Async write atom does not seem to work nicely with Suspense
const loadTodosAtom = atom(null, async (get, set) => set(todoState, await loadTodosRemote(get(todoState))))

const loadTodosRemote = async (prevTodos: Todo[]) => {
  const resp = await fetch(
    "https://gist.githubusercontent.com/AndrewLamWARC/06226afcc5c45bd8eb45d10aabc76f30/raw/todos.json"
  )
  const todos: Todo[] = await resp.json()
  const prevTodoIds = prevTodos.map((t) => t.id)
  return [...prevTodos, ...todos.filter((t) => !prevTodoIds.includes(t.id))]
}
