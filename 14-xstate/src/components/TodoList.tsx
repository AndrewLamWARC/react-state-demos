import { Heading } from "@chakra-ui/react"
import { TodoItem } from "./TodoItem"
import { Todo, useApplicationContext } from "../machines/todosMachine"

export { TodoListItems, TodoList }

const TodoListItems = () => {
  const { todos } = useApplicationContext()
  console.log("TodoListItems")
  console.table(todos)
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
