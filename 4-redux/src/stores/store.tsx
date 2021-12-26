import { v4 } from "uuid"
import { createStore, applyMiddleware, ActionCreator, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk, { ThunkDispatch } from "redux-thunk"

export type Todo = {
  id: string
  text: string
  done: boolean
}

// Async actions handled using react-thunk
export const loadTodosRemote = async (dispatch: ThunkDispatch<typeof store, void, TodoAction>) => {
  const resp = await fetch(
    "https://gist.githubusercontent.com/AndrewLamWARC/06226afcc5c45bd8eb45d10aabc76f30/raw/todos.json"
  )
  const todos: Todo[] = await resp.json()
  dispatch(loadTodos(todos))
}

//--- State management using redux toolkit
export type RootStore = {
  todo: Todo[]
}

// Action types. Classic redux usually create separate domain folder like 'todo' to hold redux implementation details.
// Then move the following bits into subfolders todo/types, todo/actions, todo/reducer. For this demo, everything is in 1 file. https://github.com/erikras/ducks-modular-redux
export enum TodoEnums {
  ADD_TODO = "ADD_TODO",
  UPDATE_TODO = "UPDATE_TODO",
  DELETE_TODO = "DELETE_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  LOAD_TODO = "LOAD_TODO"
}

export type AddTodoAction = {
  type: TodoEnums.ADD_TODO
  payload: string
}

export type UpdateTodoAction = {
  type: TodoEnums.UPDATE_TODO
  payload: Pick<Todo, "id" | "text">
}

export type DeleteTodoAction = {
  type: TodoEnums.DELETE_TODO
  payload: Pick<Todo, "id" | "text">
}

export type ToggleTodoAction = {
  type: TodoEnums.TOGGLE_TODO
  payload: Pick<Todo, "id">
}

export type LoadTodoAction = {
  type: TodoEnums.LOAD_TODO
  payload: Todo[]
}

export type TodoAction = AddTodoAction | DeleteTodoAction | UpdateTodoAction | ToggleTodoAction | LoadTodoAction

// Reducer
export const todoReducer = (state: Todo[] = [], action: TodoAction) => {
  const prevTodoIds = state.map((t) => t.id)

  switch (action.type) {
    case TodoEnums.ADD_TODO:
      return [
        ...state,
        {
          id: v4(),
          text: action.payload,
          done: false
        }
      ]
    case TodoEnums.UPDATE_TODO:
      return state.map((todo) => ({
        ...todo,
        text: todo.id === action.payload.id ? action.payload.text : todo.text
      }))
    case TodoEnums.TOGGLE_TODO:
      return state.map((todo) => ({
        ...todo,
        done: todo.id === action.payload.id ? !todo.done : todo.done
      }))
    case TodoEnums.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id)
    case TodoEnums.LOAD_TODO:
      return [...state, ...action.payload.filter((t) => !prevTodoIds.includes(t.id))]
    default:
      return state
  }
}

// Action creators
export const addTodo: ActionCreator<AddTodoAction> = (text: string) => {
  return { type: TodoEnums.ADD_TODO, payload: text }
}
export const deleteTodo: ActionCreator<DeleteTodoAction> = (todo: Todo) => {
  return { type: TodoEnums.DELETE_TODO, payload: todo }
}
export const updateTodo: ActionCreator<UpdateTodoAction> = (todo: Todo) => {
  return { type: TodoEnums.UPDATE_TODO, payload: todo }
}
export const toggleTodo: ActionCreator<ToggleTodoAction> = (todo: Todo) => {
  return { type: TodoEnums.TOGGLE_TODO, payload: todo }
}
export const loadTodos: ActionCreator<LoadTodoAction> = (todos: Todo[]) => {
  return { type: TodoEnums.LOAD_TODO, payload: todos }
}

export const rootReducer = combineReducers<RootStore>({ todo: todoReducer })
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
