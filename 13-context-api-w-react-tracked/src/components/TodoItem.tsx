import { Button, Input, Flex, Checkbox } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import { Todo, useTodos } from "../stores/todoStore"

export { TodoItem }

type TodoItemType = {
  todo: Todo
}
const TodoItem = ({ todo }: TodoItemType) => {
  const { toggleTodo, updateTodo, deleteTodo } = useTodos()
  return (
    <Flex pt={2} key={todo.id}>
      <Checkbox onChange={() => toggleTodo(todo.id)} checked={todo.done} defaultChecked={todo.done} />
      <Input
        mx={2}
        value={todo.text}
        onChange={(e) => updateTodo(todo.id, e.target.value)}
        textDecoration={todo.done ? "line-through" : ""}
      />
      <Button onClick={() => deleteTodo(todo.id)}>
        <DeleteIcon />
      </Button>
    </Flex>
  )
}
