import { Button, Input, Grid } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import { Dispatch, SetStateAction } from "react"
import { addTodoType } from "../stores/todoStore"

type TodoItemProps = {
  newTodo: string
  setNewTodo: Dispatch<SetStateAction<string>>
  addTodo: addTodoType
}

const TodoItem = ({ newTodo, setNewTodo, addTodo }: TodoItemProps) => (
  <Grid pt={2} templateColumns="10fr 1fr" columnGap="3">
    <Input
      placeholder="New todo"
      value={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          addTodo()
        }
      }}
    />
    <Button onClick={() => addTodo()}>
      <AddIcon />
    </Button>
  </Grid>
)

export { TodoItem }
