import { Heading } from "@chakra-ui/react"
import { Todo } from "../stores/todoStore"
import { todoState } from "../stores/todoStore"
import { useAtom } from "jotai"
import { TodoItem } from "./TodoItem"

const TodoListItems = () => {
  const [todos] = useAtom(todoState)

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
