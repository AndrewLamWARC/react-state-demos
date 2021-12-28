import { Heading } from "@chakra-ui/react"
import { TodoItem } from "./TodoItem"
import { Todo, visibleTodos$ } from "../stores/todoStore.repository"
import { useObservable } from "@ngneat/use-observable"

const TodoListItems = () => {
  const [todos] = useObservable(visibleTodos$)
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
