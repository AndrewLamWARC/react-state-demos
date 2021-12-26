import { useState } from "react"

export type todo = {
  id: number
  text: string
  done: boolean
}

export type addTodoType = (newTodo: string) => void
export type updateTodoType = (id: number, text: string) => void
export type deleteTodoType = (id: number) => void
export type toggleTodoType = (id: number) => void

const addTodo = (todos: todo[], text: string): todo[] => [
  ...todos,
  {
    id: Math.max(1, ...todos.map(({ id }) => id)) + 1,
    text,
    done: false
  }
]

const updateTodo = (todos: todo[], id: number, text: string): todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text
  }))

const deleteTodo = (todos: todo[], id: number): todo[] => todos.filter((todo) => todo.id !== id)

const toggleTodo = (todos: todo[], id: number): todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done
  }))

// State management using props passing
export const useTodos = (initial: todo[] = []) => {
  const [todos, setTodos] = useState(initial)

  return {
    // State
    todos,

    // Actions
    addTodo: (newTodo: string) => setTodos((todos) => addTodo(todos, newTodo)),
    updateTodo: (id: number, text: string) => setTodos((todos) => updateTodo(todos, id, text)),
    toggleTodo: (id: number) => setTodos((todos) => toggleTodo(todos, id)),
    deleteTodo: (id: number) => setTodos((todos) => deleteTodo(todos, id)),
    loadTodos: async (loadedTodos: todo[]) => setTodos(loadedTodos) // async action
  }
}
