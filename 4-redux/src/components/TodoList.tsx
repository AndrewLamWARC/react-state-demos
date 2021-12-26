import { Heading } from "@chakra-ui/react"
import { RootStore, Todo } from "../stores/store"
import { useSelector } from "react-redux"
import { TodoItem } from "./TodoItem"

const TodoListItems = () => {
  const todos = useSelector((state: RootStore) => state.todo)

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
