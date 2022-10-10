import { Heading } from "@chakra-ui/react"
import { deleteTodoType, Todo, toggleTodoType, updateTodoType } from "../stores/todoStore"
import { TodoItem } from "./TodoItem"

type TodoListItemsProps = {
  todos: Todo[]
  toggleTodo: toggleTodoType
  updateTodo: updateTodoType
  deleteTodo: deleteTodoType
}

const TodoListItems = ({ todos, toggleTodo, updateTodo, deleteTodo }: TodoListItemsProps) => {
  return (
    <>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      ))}
    </>
  )
}

type TodoListProps = {
  todos: Todo[]
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
