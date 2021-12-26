import { Heading } from "@chakra-ui/react"
import { Todo } from "../stores/todoStore"
import { todoStore } from "../stores/todoStore"
import { useSnapshot } from "valtio"
import { TodoItem } from "./TodoItem"

const TodoListItems = () => {
  const todoSnap = useSnapshot(todoStore)
  const { todos } = todoSnap

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
