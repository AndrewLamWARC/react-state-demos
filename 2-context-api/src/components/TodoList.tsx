import { Heading } from "@chakra-ui/react"
import { Todo, useTodoContext } from "../stores/todoStore"
import { TodoItem } from "./TodoItem"

export { TodoListItems, TodoList }

const TodoListItems = () => {
  const { todos } = useTodoContext()
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
