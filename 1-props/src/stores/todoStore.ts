import { useState } from "react"

export type Todo = {
  id: number
  text: string
  done: boolean
}

export type addTodoType = (newTodo: string) => void
export type updateTodoType = (id: number, text: string) => void
export type deleteTodoType = (id: number) => void
export type toggleTodoType = (id: number) => void

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(1, ...todos.map(({ id }) => id)) + 1,
    text,
    done: false
  }
]

const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text
  }))

const deleteTodo = (todos: Todo[], id: number): Todo[] => todos.filter((todo) => todo.id !== id)

const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done
  }))

// State management using props passing
export const useTodos = (initial: Todo[] = []) => {
  const [todos, setTodos] = useState(initial)

  return {
    // State
    todos,

    // Actions
    addTodo: (newTodo: string) => setTodos((todos) => addTodo(todos, newTodo)),
    updateTodo: (id: number, text: string) => setTodos((todos) => updateTodo(todos, id, text)),
    toggleTodo: (id: number) => setTodos((todos) => toggleTodo(todos, id)),
    deleteTodo: (id: number) => setTodos((todos) => deleteTodo(todos, id)),
    loadTodos: async (loadedTodos: Todo[]) => setTodos(loadedTodos) // async action
  }
}
