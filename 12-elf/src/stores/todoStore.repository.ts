import { createState, withProps, Store, select } from "@ngneat/elf"
import {
  withEntities,
  setEntities,
  addEntities,
  updateEntities,
  deleteEntities,
  selectAllApply
} from "@ngneat/elf-entities"
import { withRequestsStatus, updateRequestStatus, createRequestsStatusOperator } from "@ngneat/elf-requests"
import { switchMap } from "rxjs/operators"
import { v4 } from "uuid"

export type Todo = {
  id: string
  text: string
  done: boolean
}

export type TodosProps = {
  filter: "ALL" | "DONE" | "NOTDONE"
}

const { state, config } = createState(
  withProps<TodosProps>({ filter: "ALL" }),
  withEntities<Todo>(),
  // You can pass the keys type
  withRequestsStatus<"todos" | `todos-${string}`>()
)

const store = new Store({ name: "todos", state, config })

const filter$ = store.pipe(select(({ filter }) => filter))

export const visibleTodos$ = filter$.pipe(
  switchMap((filter) => {
    return store.pipe(
      selectAllApply({
        filterEntity({ done }) {
          if (filter === "ALL") return true
          return filter === "DONE" ? done : !done
        }
      })
    )
  })
)

export const updateTodosFilter = (filter: TodosProps["filter"]) => {
  store.update((state) => ({
    ...state,
    filter
  }))
}

export const loadTodos = (todos: Todo[]) => {
  store.update(setEntities(todos))
  updateRequestStatus("todos", "success")
}

export const addTodo = (text: Todo["text"]) => {
  store.update(
    addEntities({
      id: v4(),
      text,
      done: false
    })
  )
}

export const toggleTodo = (id: Todo["id"]) => {
  store.update(
    updateEntities(id, (todo) => ({
      ...todo,
      done: !todo.done
    }))
  )
}

export const updateTodo = (id: Todo["id"], text: Todo["text"]) => {
  store.update(
    updateEntities(id, (todo) => ({
      ...todo,
      text: text
    }))
  )
}

export const deleteTodo = (id: Todo["id"]) => {
  store.update(deleteEntities(id))
}

export const trackTodosRequestsStatus = createRequestsStatusOperator(store)
