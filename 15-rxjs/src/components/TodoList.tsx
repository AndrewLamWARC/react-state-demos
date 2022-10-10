import { Heading } from "@chakra-ui/react"
import { useObservable } from "../hooks/useObservable"
import { Todo } from "../stores/todoStore"
import { todoStore } from "../stores/todoStore"
import { TodoItem } from "./TodoItem"

const TodoListItems = () => {
  const todos = useObservable(todoStore.todos$)

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
