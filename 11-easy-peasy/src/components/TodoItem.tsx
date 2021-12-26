import { Button, Input, Flex, Checkbox } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import { Todo } from "../stores/todoStore"
import { useTodoStoreActions } from "../stores/todoStore"

export { TodoItem }

type TodoItemProps = {
  todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const toggleTodo = useTodoStoreActions((s) => s.toggleTodo)
  const updateTodo = useTodoStoreActions((s) => s.updateTodo)
  const deleteTodo = useTodoStoreActions((s) => s.deleteTodo)
  return (
    <Flex pt={2} key={todo.id}>
      <Checkbox onChange={() => toggleTodo(todo.id)} checked={todo.done} defaultChecked={todo.done} />
      <Input
        mx={2}
        value={todo.text}
        onChange={(e) => updateTodo({ ...todo, text: e.target.value })}
        textDecoration={todo.done ? "line-through" : ""}
      />
      <Button onClick={() => deleteTodo(todo.id)}>
        <DeleteIcon />
      </Button>
    </Flex>
  )
}
