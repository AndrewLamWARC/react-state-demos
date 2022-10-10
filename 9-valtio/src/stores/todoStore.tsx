import { v4 } from "uuid"
import { proxy, useSnapshot } from "valtio"

// Define shape of individual state
export type Todo = {
  id: string
  text: string
  done: boolean
}

// Define shape of store including state and actions that mutate state
type TodoStoreType = {
  todos: Todo[]
  addTodo: (text: string) => void
  updateTodo: (todo: Todo) => void
  deleteTodo: (id: string) => void
  toggleTodo: (id: string) => void
  loadTodos: () => void
}

// Implement the state store
export const todoStore: TodoStoreType = proxy<TodoStoreType>({
  todos: [],
  addTodo: (text: string) => todoStore.todos.push({ id: v4(), text: text, done: false }),
  updateTodo: (todo: Todo) =>
    (todoStore.todos = todoStore.todos.map((t) => ({
      id: t.id,
      text: t.id === todo.id ? todo.text : t.text,
      done: t.id === todo.id ? todo.done : t.done
    }))),
  deleteTodo: (id: string) => (todoStore.todos = todoStore.todos.filter((t) => t.id !== id)),
  toggleTodo: (id: string) =>
    (todoStore.todos = todoStore.todos.map((t) => ({ ...t, done: t.id === id ? !t.done : t.done }))),
  loadTodos: () => loadTodos(todoStore)
})

// Async action that mutate state
const loadTodos = async (todoStore: TodoStoreType) => {
  console.log("Loading todos. Demo valtio with async")
  const resp = await fetch(
    "https://gist.githubusercontent.com/AndrewLamWARC/06226afcc5c45bd8eb45d10aabc76f30/raw/todos.json"
  )
  const todos: Todo[] = await resp.json()
  const prevTodoIds = todoStore.todos.map((t) => t.id)
  todoStore.todos = [...todoStore.todos, ...todos.filter((t) => !prevTodoIds.includes(t.id))]
}

// const slice = todoSlice([])
// export const todoReducer = slice.reducer
// export const todoActions = slice.actions
