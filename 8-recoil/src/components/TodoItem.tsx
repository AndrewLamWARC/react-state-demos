import { Input, Checkbox, Button, Flex } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import { Todo, todosState, todoDoneState, todoTextState } from "../stores/todoStore"
import { useSetRecoilState } from "recoil"

type TodoItemProps = {
  todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const setTodos = useSetRecoilState(todosState)

  const onToggle = () => {
    setTodos((todos) => todos.map((t) => ({ ...t, done: t.id === todo.id ? !t.done : t.done })))
  }

  const onChangeText = (text: string) => {
    setTodos((todos) => todos.map((t) => ({ ...t, text: t.id === todo.id ? text : t.text })))
  }

  const onDelete = (todo: Todo) => {
    setTodos((todos) => todos.filter((t) => t.id !== todo.id))
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
      <Button onClick={() => onDelete(todo)}>
        <DeleteIcon />
      </Button>
    </Flex>
  )
}

export { TodoItem }
