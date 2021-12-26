import { Input, Checkbox, Button, Flex } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import { Todo, todoStore } from "../stores/todoStore"
import { useSnapshot } from "valtio"

type TodoItemProps = {
  todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const todoSnap = useSnapshot(todoStore)

  const onToggle = () => {
    todoSnap.toggleTodo(todo.id)
  }

  const onChangeText = (text: string) => {
    todoSnap.updateTodo({ ...todo, text })
  }

  const onDelete = (id: string) => {
    todoSnap.deleteTodo(id)
  }

  return (
    <Flex pt={2} key={todo.id}>
      <Checkbox onChange={onToggle} defaultChecked={todo.done} checked={todo.done} />
      <Input
        mx={2}
        defaultValue={todo.text}
        value={todo.text}
        onChange={(e) => onChangeText(e.target.value)}
        textDecoration={todo.done ? "line-through" : ""}
      />
      <Button onClick={() => onDelete(todo.id)}>
        <DeleteIcon />
      </Button>
    </Flex>
  )
}

export { TodoItem }
