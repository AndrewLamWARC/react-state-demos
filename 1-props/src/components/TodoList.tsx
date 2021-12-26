import { Heading } from "@chakra-ui/react"
import { deleteTodoType, todo, toggleTodoType, updateTodoType } from "../stores/todoStore"
import { TodoItem } from "./TodoItem"

type TodoListItemsProps = {
  todos: todo[]
  toggleTodo: toggleTodoType
  updateTodo: updateTodoType
  deleteTodo: deleteTodoType
}

const TodoListItems = ({ todos, toggleTodo, updateTodo, deleteTodo }: TodoListItemsProps) => {
  return (
    <>
      {todos.map((todo: todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      ))}
    </>
  )
}

type TodoListProps = {
  todos: todo[]
  toggleTodo: toggleTodoType
  updateTodo: updateTodoType
  deleteTodo: deleteTodoType
}

const TodoList = ({ todos, toggleTodo, updateTodo, deleteTodo }: TodoListProps) => {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems todos={todos} toggleTodo={toggleTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </>
  )
}

export { TodoListItems, TodoList }
