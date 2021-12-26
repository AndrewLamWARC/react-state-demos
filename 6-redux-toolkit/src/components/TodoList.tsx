import { Heading } from "@chakra-ui/react"
import { Todo } from "../stores/todoStore"
import { useAppSelector } from "../hooks/useAppState"
import { TodoItem } from "./TodoItem"

const TodoListItems = () => {
  const todos = useAppSelector((s) => s.todos)
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
