import { Button, Flex, Heading } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import { Todo, useStore } from "../stores/todoStore"
import { TodoItem } from "./TodoItem"

const TodoListItems = () => {
  const { todos, deleteTodo } = useStore()
  return (
    <>
      {todos.map((todo: Todo) => (
        <Flex pt={2} key={todo.id}>
          <TodoItem todo={todo} />
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
