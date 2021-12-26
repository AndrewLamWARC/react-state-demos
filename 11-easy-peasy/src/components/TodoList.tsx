import { Heading } from "@chakra-ui/react"
import { TodoItem } from "./TodoItem"
import { Todo } from "../stores/todoStore"
import { useTodoStoreActions, useTodoStoreState } from "../stores/todoStore"

const TodoListItems = () => {
  const todos = useTodoStoreState((s) => s.todos)
  const toggleTodo = useTodoStoreActions((s) => s.toggleTodo)
  const updateTodo = useTodoStoreActions((s) => s.updateTodo)
  const deleteTodo = useTodoStoreActions((s) => s.deleteTodo)
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
