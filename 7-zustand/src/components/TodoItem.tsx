import { Input, Checkbox } from "@chakra-ui/react"
import { Todo, useStore } from "../stores/todoStore"

type TodoItemProp = {
  todo: Todo
}

const TodoItem = ({ todo }: TodoItemProp) => {
  const { toggleTodo, updateTodo } = useStore()
  const onToggle = () => toggleTodo(todo.id)
  return (
    <>
      <Checkbox onChange={onToggle} checked={todo.done} defaultChecked={todo.done} />
      <Input
        mx={2}
        value={todo.text}
        onChange={(e) => updateTodo(todo.id, e.target.value)}
        textDecoration={todo.done ? "line-through" : ""}
      />
    </>
  )
}

export { TodoItem }
