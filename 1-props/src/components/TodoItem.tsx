import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"
import { deleteTodoType, todo, toggleTodoType, updateTodoType } from "../stores/todoStore"

export { TodoItem }

type TodoItemProps = {
  todo: todo
  toggleTodo: toggleTodoType
  updateTodo: updateTodoType
  deleteTodo: deleteTodoType
}

const TodoItem = ({ todo, toggleTodo, updateTodo, deleteTodo }: TodoItemProps) => {
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
