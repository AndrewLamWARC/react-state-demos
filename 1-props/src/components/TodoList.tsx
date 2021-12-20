import { Button, Input, Flex, Checkbox, Heading, Text } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import { deleteTodoType, todo, toggleTodoType, updateTodoType } from "../stores/todoStore"

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
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={() => toggleTodo(todo.id)} checked={todo.done} />
          <Input mx={2} value={todo.text} onChange={(e) => updateTodo(todo.id, e.target.value)} />
          <Button onClick={() => deleteTodo(todo.id)}>
            <DeleteIcon />
          </Button>
        </Flex>
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
