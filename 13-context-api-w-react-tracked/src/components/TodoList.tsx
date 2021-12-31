import { Heading } from "@chakra-ui/react"
import { Todo, useTodos } from "../stores/todoStore"
import { TodoItem } from "./TodoItem"

export { TodoListItems, TodoList }

const TodoListItems = () => {
  const { todos } = useTodos()
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
