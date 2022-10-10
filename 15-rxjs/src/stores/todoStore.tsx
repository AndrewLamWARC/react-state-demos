import { v4 } from "uuid"
import { BehaviorSubject } from "rxjs"

export type Todo = {
  id: string
  text: string
  done: boolean
}

type TodoStoreType = {
  todos$: BehaviorSubject<Todo[]>
  addTodo: (text: string) => void
  updateTodo: (todo: Todo) => void
  deleteTodo: (id: string) => void
  toggleTodo: (id: string) => void
  loadTodos: () => void
}

// Strategy with rxjs.
// Observable array of todo with Subject or BehaviourSubject
// State kept in parent and updated using setTodos with useState
// On add todo, .next new todo to observable array
// On update todo, emit new observable array with updated todo
// On delete todo, emit new observable array without deleted todo
// On toggle todo, emit new observable array with updated todo

export const todoStore: TodoStoreType = {
  todos$: new BehaviorSubject<Todo[]>([]),
  addTodo: (text: string) => {
    const newTodo = { id: v4(), text: text, done: false }
    const newTodos = [...todoStore.todos$.getValue(), newTodo]
    text && todoStore.todos$.next(newTodos)
  },
  updateTodo: (todo: Todo) => {
    const updatedTodos = todoStore.todos$.getValue().map((t) => (t.id === todo.id ? todo : t))
    todoStore.todos$.next(updatedTodos)
  },
  deleteTodo: (id: string) => {
    const deletedTodos = todoStore.todos$.getValue().filter((t) => t.id !== id)
    todoStore.todos$.next(deletedTodos)
  },
  toggleTodo: (id: string) => {
    const toggledTodos = todoStore.todos$.getValue().map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    todoStore.todos$.next(toggledTodos)
  },
  loadTodos: () => loadTodos()
}

// Todo - this is a bit clumsy. Improve this story. 
// My aim for loadTodos is to demo async with state because some state management libraries like redux cannot do async natively without resorting to 3rd party libs like redux-thunk
const loadTodos = async () => {
  console.log("Loading todos. Demo rxjs with async")
  const resp = await fetch(
    "https://gist.githubusercontent.com/AndrewLamWARC/06226afcc5c45bd8eb45d10aabc76f30/raw/todos.json"
  )
  const todos: Todo[] = await resp.json()
  const prevTodoIds = todoStore.todos$.getValue().map((t) => t.id)
  todoStore.todos$.next([...todoStore.todos$.getValue(), ...todos.filter((t) => !prevTodoIds.includes(t.id))])
}
