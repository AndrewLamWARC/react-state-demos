import { Heading } from "@chakra-ui/react"
import { Todo, todosState } from "../stores/todoStore"
import { TodoItem } from "./TodoItem"
import { useRecoilValue } from "recoil"

const TodoListItems = () => {
  const todos = useRecoilValue(todosState)

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
