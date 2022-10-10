import { v4 } from "uuid"
import { makeAutoObservable, runInAction } from "mobx"
import { createContext, ReactNode, useContext } from "react"

// Represents 1 todo item. Class based mobx observable
export class Todo {
  id = ""
  text = ""
  done = false

  constructor(id: string = v4()) {
    makeAutoObservable(this, {
      id: false
    })

    this.id = id
  }

  setText = (text: string) => {
    this.text = text
  }

  toggleDone = () => {
    console.log("ToggleDone called")
    this.done = !this.done
  }

  fromJson = (json: Todo) => {
    this.text = json.text
    this.done = json.done
  }
}

// Async actions
export const loadTodos = async () => {
  const resp = await fetch(
    "https://gist.githubusercontent.com/AndrewLamWARC/06226afcc5c45bd8eb45d10aabc76f30/raw/todos.json"
  )
  const todos: Todo[] = await resp.json()

  return todos
}

//--- State management using mobx
export type TodoListStoreType = {
  todos: Todo[]
  addTodo: (newTodo: string) => void
  updateTodo: (id: string, text: string) => void
  deleteTodo: (id: string) => void
  toggleTodo: (id: string) => void
  loadTodos: () => void
  updateTodoFromRemote: (json: Todo) => void
}

// Represents a list of todo items as well as the actions that affect state on todos. Function based mobx observable
const TodoListStore: TodoListStoreType = makeAutoObservable({
  todos: [],

  addTodo: (newTodo: string) => {
    const todo = new Todo()
    todo.setText(newTodo)
    TodoListStore.todos.push(todo)
  },
  deleteTodo: (id: string) => {
    TodoListStore.todos = TodoListStore.todos.filter((todo) => todo.id !== id)
  },
  loadTodos: async () => {
    const todos = await loadTodos()
    runInAction(() => {
      todos.forEach((json) => {
        TodoListStore.updateTodoFromRemote(json)
      })
    })
  },
  updateTodo: (id: string, text: string) => {
    TodoListStore.todos.filter((t) => t.id === id).forEach((t) => t.setText(text))
  },
  toggleTodo: (id: string) => {
    TodoListStore.todos.filter((t) => t.id === id).forEach((t) => t.toggleDone())
  },
  updateTodoFromRemote: (json: Todo) => {
    let todo = TodoListStore.todos.find((todo) => todo.id === json.id)
    if (!todo) {
      todo = new Todo(json.id)
      TodoListStore.todos.push(todo)
      todo.fromJson(json) // update the state on current todo from remote json of todo
    }
  }
})

export { TodoListStore as TodoStore }

// We can add other slices of state into the RootStore
export const RootStore = {
  todoListStore: TodoListStore,
  todo: Todo
}

// No need to use ContextApi with mobx but here to demostrate it is possible
export const StoreContext = createContext(RootStore)

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <StoreContext.Provider value={RootStore}>{children}</StoreContext.Provider>
}

export const useStoreContext = () => {
  const value = useContext(StoreContext)
  if (value === null) throw new Error("Please add StoreProvider")
  return value
}
