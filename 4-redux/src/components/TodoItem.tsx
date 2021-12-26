import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import { Todo, deleteTodo, toggleTodo, updateTodo } from "../stores/store"
import { useDispatch } from "react-redux"

type TodoItemProps = {
  todo: Todo
}
const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useDispatch()

  return (
    <Flex pt={2} key={todo.id}>
      <Checkbox onChange={() => dispatch(toggleTodo(todo))} checked={todo.done} defaultChecked={todo.done} />
      <Input
        mx={2}
        value={todo.text}
        onChange={(e) => dispatch(updateTodo({ ...todo, text: e.target.value }))}
        textDecoration={todo.done ? "line-through" : ""}
      />
      <Button onClick={() => dispatch(deleteTodo(todo))}>
        <DeleteIcon />
      </Button>
    </Flex>
  )
}

export { TodoItem }
