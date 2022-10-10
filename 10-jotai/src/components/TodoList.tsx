import { Heading } from "@chakra-ui/react"
import { Todo } from "../stores/todoStore"
import { asyncTodoState } from "../stores/todoStore"
import { useAtom } from "jotai"
import { TodoItem } from "./TodoItem"

const TodoListItems = () => {
  const [todos] = useAtom(asyncTodoState)

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
