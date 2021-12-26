import { Button, Input, Grid } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import { useState } from "react"
import { useStoreContext } from "../stores/todoStore"
import { observer } from "mobx-react-lite"

const TodoItemNew = observer(() => {
  const [newTodo, setNewTodo] = useState("")
  const { todoListStore } = useStoreContext()

  const onAddNewTodo = () => {
    todoListStore.addTodo(newTodo)
    setNewTodo("")
  }

  return (
    <Grid pt={2} templateColumns="10fr 2fr" columnGap="3">
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
})

export { TodoItemNew }
