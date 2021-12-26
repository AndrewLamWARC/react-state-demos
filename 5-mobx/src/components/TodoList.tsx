import { Button, Flex, Heading } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import { useStoreContext } from "../stores/todoStore"
import { observer } from "mobx-react-lite"
import { TodoItem } from "./TodoItem"

const TodoListItems = observer(() => {
  const { todoListStore } = useStoreContext()

  return (
    <>
      {todoListStore.todos.map((todo) => {
        return (
          <Flex pt={2} key={todo.id}>
            <TodoItem todo={todo} />
            <Button onClick={() => todoListStore.deleteTodo(todo.id)}>
              <DeleteIcon />
            </Button>
          </Flex>
        )
      })}
    </>
  )
})

const TodoList = () => {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  )
}

export { TodoListItems, TodoList }
