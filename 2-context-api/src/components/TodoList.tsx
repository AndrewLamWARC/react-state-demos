import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import { todo, useTodoContext } from "../stores/todoStore"

const TodoListItems = () => {
  const { todos, toggleTodo, updateTodo, deleteTodo } = useTodoContext()
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

const TodoList = () => {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  )
}

export { TodoListItems, TodoList }
