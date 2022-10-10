import { Heading } from "@chakra-ui/react"
import { RootStore, Todo } from "../stores/store"
import { TodoItem } from "./TodoItem"
import { useAppSelector } from "../hooks/useAppState"

const TodoListItems = () => {
  const todos = useAppSelector((state: RootStore) => state.todo)

  return (
    <>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  )
}

const TodoList = () => {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  )
}

export { TodoListItems, TodoList }
