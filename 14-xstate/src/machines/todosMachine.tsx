import { createContext, ReactNode, useContext } from "react"
import { v4 } from "uuid"
import { assign, createMachine, EventFrom } from "xstate"
import { useMachine } from "@xstate/react"
import { createModel } from "xstate/lib/model"

export type Todo = {
  id: string
  text: string
  done: boolean
}

export type TodosMachineContext = {
  todos: Todo[]
  newTodoText: string
}

const todosModel = createModel(
  // initial context
  {
    todos: [] as Todo[],
    newTodoText: ""
  },
  {
    // event creators
    events: {
      updateTodoText: (text: string) => ({ text }),
      addTodo: (text: string) => ({ text }),
      deleteTodo: (id: string) => ({ id }),
      updateTodo: (id: string, text: string) => ({ id, text }),
      toggleTodo: (id: string) => ({ id }),
      loadTodos: (todos: Todo[]) => ({ todos }),
      loadTodosRemote: () => ({}),
      log: () => ({})
    }
  }
)

type TodosEvent = EventFrom<typeof todosModel>

const createTodo = (text: string): Todo => {
  return {
    id: v4(),
    text,
    done: false
  }
}

export const todosMachine = createMachine<TodosMachineContext, TodosEvent>(
  {
    // Boilerplate https://xstate.js.org/docs/guides/actions.html
    predictableActionArguments: true,

    // machine id
    id: "todos",

    // initial state
    initial: "ready",

    // local context for entire machine
    context: todosModel.initialContext,

    // state definitions
    states: {
      ready: {
        // Ready state
        entry: ["log"],
        on: {
          loadTodosRemote: "loading", // action: state. Ready state transition to loading state
          updateTodo: {
            actions: assign({
              todos: (context, event) => {
                console.log("updating todo", event.id)
                return updateTodo(context.todos, event.id, event.text)
              }
            })
          },
          updateTodoText: {
            actions: assign({
              newTodoText: (_, event) => {
                console.log("updating todo text", event.text)
                return event.text
              }
            })
          },
          addTodo: {
            actions: assign((context, event) => {
              console.log("adding todo", event.text)
              return {
                newTodoText: "",
                todos: addTodo(context.todos, event.text)
              }
            })
          },
          toggleTodo: {
            actions: assign((context, event) => {
              console.log("toggling todo", event.id)
              return {
                todos: toggleTodo(context.todos, event.id)
              }
            })
          },
          deleteTodo: {
            actions: assign((context, event) => {
              console.log("deleting todo", event.id)
              return {
                todos: deleteTodo(context.todos, event.id)
              }
            })
          },
          loadTodos: {
            actions: assign({
              todos: (_, e) => e.todos
            })
          }
        }
      },
      loading: {
        // Loading state
        invoke: {
          src: async () => {
            console.log("transition to loading")
            const resp = await fetch(
              "https://gist.githubusercontent.com/AndrewLamWARC/06226afcc5c45bd8eb45d10aabc76f30/raw/todos.json"
            )
            const todos = await resp.json()
            return todos
          },
          onDone: {
            target: "ready",
            actions: assign((_, event) => {
              console.log("done loading, assign loaded data and transition to ready")
              console.table(event.data)
              return {
                todos: event.data
              }
            })
          }
        }
      }
    }
  },
  {
    actions: {
      log: (context, _) => {
        console.log("Enter ready state", context.todos)
      }
    }
  }
)

const addTodo = (todos: Todo[], text: string): Todo[] => [...todos, createTodo(text)]

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

const useApplicationState = () => {
  const [state, send] = useMachine(todosMachine)

  return {
    todos: state.context.todos,
    newTodoText: state.context.newTodoText,
    updateTodoText: (text: string) => send({ type: "updateTodoText", text }),
    addTodo: (text: string) => send({ type: "addTodo", text }),
    deleteTodo: (id: string) => send({ type: "deleteTodo", id }),
    updateTodo: (id: string, text: string) => send({ type: "updateTodo", id, text }),
    toggleTodo: (id: string) => send({ type: "toggleTodo", id }),
    loadTodos: (todos: Todo[]) => send({ type: "loadTodos", todos }),
    loadTodosRemote: () => send({ type: "loadTodosRemote" }),
    log: () => send({ type: "log" })
  }
}

export const ApplicationContext = createContext<ReturnType<typeof useApplicationState> | null>(null)
export const ApplicationProvider = ({ children }: { children: ReactNode }) => (
  <ApplicationContext.Provider value={useApplicationState()}>{children}</ApplicationContext.Provider>
)

export const useApplicationContext = () => {
  const value = useContext(ApplicationContext)
  if (value === null) throw new Error("Please add TodoProvider")
  return value
}
