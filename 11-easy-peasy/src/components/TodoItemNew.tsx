import { Button, Input, Grid } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import { useState } from "react"
import { useTodoStoreActions } from "../stores/todoStore"

const TodoItemNew = () => {
  const [newText, setNewText] = useState("")
  const addTodo = useTodoStoreActions((s) => s.addTodo)

  const onAddNewTodo = () => {
    addTodo(newText)
    setNewText("")
  }

  return (
    <Grid pt={2} templateColumns="10fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
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

export { TodoItemNew }
