import { v4 } from "uuid"
import { useState, createContext, useContext, ReactNode } from "react"

export type { Todo }
export { useTodos, TodoProvider, useTodoContext }

type Todo = {
  id: string
  text: string
  done: boolean
}

const addTodo = (todos: ReadonlyArray<Todo>, text: string): ReadonlyArray<Todo> => [
  ...todos,
  {
    id: v4(),
    text,
    done: false
  }
]

const updateTodo = (todos: ReadonlyArray<Todo>, id: string, text: string): ReadonlyArray<Todo> =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text
  }))

const deleteTodo = (todos: ReadonlyArray<Todo>, id: string): ReadonlyArray<Todo> =>
  todos.filter((todo) => todo.id !== id)

const toggleTodo = (todos: ReadonlyArray<Todo>, id: string): ReadonlyArray<Todo> =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done
  }))

// State management using context api
const useTodos = (initial: ReadonlyArray<Todo> = []) => {
  const [todos, setTodos] = useState(initial)

  return {
    // State
    todos,

    // Actions
    addTodo: (newTodo: string) => setTodos((todos) => addTodo(todos, newTodo)),
    updateTodo: (id: string, text: string) => setTodos((todos) => updateTodo(todos, id, text)),
    toggleTodo: (id: string) => setTodos((todos) => toggleTodo(todos, id)),
    deleteTodo: (id: string) => setTodos((todos) => deleteTodo(todos, id)),
    loadTodos: async (loadedTodos: Todo[]) =>
      setTodos((prev) => {
        const prevTodoIds = prev.map((t) => t.id)
        return [...prev, ...loadedTodos.filter((t) => !prevTodoIds.includes(t.id))]
      }) // async action
  }
}

const TodoContext = createContext<ReturnType<typeof useTodos> | null>(null)

const TodoProvider = ({ children }: { children: ReactNode }) => {
  return <TodoContext.Provider value={useTodos([])}>{children}</TodoContext.Provider>
}

const useTodoContext = () => {
  const value = useContext(TodoContext)
  if (value === null) throw new Error("Please add TodoProvider")
  return value
}
