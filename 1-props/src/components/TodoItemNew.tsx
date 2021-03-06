import { Button, Input, Grid } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import { useState } from "react"
import { addTodoType } from "../stores/todoStore"

export { TodoItemNew }

type TodoItemProps = {
  addTodo: addTodoType
}

const TodoItemNew = ({ addTodo }: TodoItemProps) => {
  const [newTodo, setNewTodo] = useState("")
  const onAddNewTodo = () => {
    addTodo(newTodo)
    setNewTodo("")
  }
  return (
    <Grid pt={2} templateColumns="10fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onAddNewTodo()
          }
        }}
      />
      <Button onClick={onAddNewTodo}>
        <AddIcon />
      </Button>
    </Grid>
  )
}
