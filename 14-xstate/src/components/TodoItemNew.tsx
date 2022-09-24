import { Button, Input, Grid } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import { useApplicationContext } from "../machines/todosMachine"

export { TodoItemNew }

const TodoItemNew = () => {
  const { newTodoText, addTodo, updateTodoText } = useApplicationContext()
  const onAddNewTodo = () => {
    addTodo(newTodoText)
  }

  return (
    <Grid pt={2} templateColumns="10fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={newTodoText}
        onChange={(e) => {
          updateTodoText(e.target.value)
        }}
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
