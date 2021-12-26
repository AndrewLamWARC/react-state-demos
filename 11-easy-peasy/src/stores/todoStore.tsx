import { createStore, action, Action, Thunk, thunk, createTypedHooks } from "easy-peasy"
import { v4 } from "uuid"

export type Todo = {
  id: string
  text: string
  done: boolean
}

const typedHooks = createTypedHooks<TodoStore>()

export const useTodoStoreActions = typedHooks.useStoreActions
export const useTodoStoreState = typedHooks.useStoreState
export const useTodoStoreDispatch = typedHooks.useStoreDispatch

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

//--- State management using easy-peasy
type TodoStore = {
  todos: Todo[]
  addTodo: Action<TodoStore, string>
  updateTodo: Action<TodoStore, Pick<Todo, "id" | "text">>
  toggleTodo: Action<TodoStore, string>
  deleteTodo: Action<TodoStore, string>
  loadTodos: Action<TodoStore, Todo[]>
  loadTodosRemote: Thunk<TodoStore>
}

export const todoStore = createStore<TodoStore>({
  todos: [],

  // Just mutate state directly, immer library used under the hood to preserve immutability of state
  addTodo: action((state, payload) => {
    state.todos = addTodo(state.todos, payload)
  }),
  updateTodo: action((state, payload) => {
    state.todos = updateTodo(state.todos, payload.id, payload.text)
  }),
  toggleTodo: action((state, payload) => {
    state.todos = toggleTodo(state.todos, payload)
  }),
  deleteTodo: action((state, payload) => {
    state.todos = deleteTodo(state.todos, payload)
  }),
  loadTodosRemote: thunk(async (actions) => {
    const todos = await loadTodosRemote()
    actions.loadTodos(todos)
  }),
  loadTodos: action((state, payload) => {
    const prevTodoIds = state.todos.map((t) => t.id)
    state.todos = [...state.todos, ...payload.filter((t) => !prevTodoIds.includes(t.id))]
  })
})

// Async action
const loadTodosRemote = async () => {
  console.log("Loading todos")
  const resp = await fetch(
    "https://gist.githubusercontent.com/AndrewLamWARC/06226afcc5c45bd8eb45d10aabc76f30/raw/todos.json"
  )
  const todos: Todo[] = await resp.json()
  return todos
}
