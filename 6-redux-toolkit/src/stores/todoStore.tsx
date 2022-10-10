import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

export type Todo = {
  id: number
  text: string
  done: boolean
}

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

//--- State management using redux toolkit

export const todoSlice = (initial: Todo[] = []) =>
  createSlice({
    name: "todos",
    // State inferred from initial state
    initialState: initial,

    // Synchronous actions that mutate state
    reducers: {
      addTodo: (state, action: PayloadAction<string>) => addTodo(state, action.payload),
      updateTodo: (state, action: PayloadAction<Pick<Todo, "id" | "text">>) =>
        updateTodo(state, action.payload.id, action.payload.text),
      toggleTodo: (state, action: PayloadAction<Pick<Todo, "id">>) => toggleTodo(state, action.payload.id),
      deleteTodo: (state, action: PayloadAction<Pick<Todo, "id">>) => deleteTodo(state, action.payload.id)
    },

    // Async actions that mutate state. This is still a bit wierd if you ask me. extraReducers means nothing to newcomers
    extraReducers: (builder) => {
      builder.addCase(loadTodos.fulfilled, (state, { payload }) => {
        const prevTodoIds = state.map((t) => t.id)
        state.push(...payload.filter((t) => !prevTodoIds.includes(t.id)))
      })
    }
  })

// Async actions handled using react-thunk
export const loadTodos = createAsyncThunk<Todo[]>("todo/load", async () => {
  console.log("Loading todos")
  const resp = await fetch(
    "https://gist.githubusercontent.com/AndrewLamWARC/06226afcc5c45bd8eb45d10aabc76f30/raw/todos.json"
  )
  const todos: Todo[] = await resp.json()
  return todos
})

const slice = todoSlice([])
export const todoReducer = slice.reducer
export const todoActions = slice.actions
