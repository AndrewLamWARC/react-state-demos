import { Button, Input, Grid } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import { useState } from "react"
import { todosState } from "../stores/todoStore"
import { useSetRecoilState } from "recoil"
import { v4 } from "uuid"

const TodoItemNew = () => {
  const [newText, setNewText] = useState("")
  const setTodos = useSetRecoilState(todosState)

  const onAddNewTodo = () => {
    setTodos((todos) => [...todos, { id: v4(), text: newText, done: false }])
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
