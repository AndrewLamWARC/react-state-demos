import create from "zustand"
import { v4 } from "uuid"

// 1. Define shape of the state
export type Todo = {
  id: string
  text: string
  done: boolean
}

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: v4(),
    text,
    done: false
  }
]

const updateTodo = (todos: Todo[], id: string, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text
  }))

const deleteTodo = (todos: Todo[], id: string): Todo[] => todos.filter((todo) => todo.id !== id)

const toggleTodo = (todos: Todo[], id: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done
  }))

//--- State management using redux toolkit

type TodoStore = {
  todos: Todo[]
  addTodo: (text: string) => void
  deleteTodo: (id: string) => void
  updateTodo: (id: string, text: string) => void
  toggleTodo: (id: string) => void
  loadTodos: () => void
}

// 2. Create store and hook for consuming store
const useStoreFactory = (initial: Todo[] = []) =>
  create<TodoStore>((set) => ({
    todos: initial,

    addTodo: (text: string) =>
      set((state) => ({
        todos: addTodo(state.todos, text)
      })),
    updateTodo: (id: string, text: string) =>
      set((state) => ({
        todos: updateTodo(state.todos, id, text)
      })),
    toggleTodo: (id: string) =>
      set((state) => ({
        todos: toggleTodo(state.todos, id)
      })),
    deleteTodo: (id: string) =>
      set((state) => ({
        todos: deleteTodo(state.todos, id)
      })),
    loadTodos: async () =>
      set({
        todos: await loadTodos()
      })
  }))

// Async actions handled using react-thunk
export const loadTodos = async () => {
  console.log("Loading todos")
  const resp = await fetch(
    "https://gist.githubusercontent.com/AndrewLamWARC/06226afcc5c45bd8eb45d10aabc76f30/raw/todos.json"
  )
  const todos: Todo[] = await resp.json()
  return todos
}

export const useStore = useStoreFactory([])
