import { Button, Grid } from "@chakra-ui/react"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { todoRemoteState, todoState } from "../stores/todoStore"

const Navbar = () => {
  const setTodos = useSetRecoilState(todoState)
  const todos = useRecoilValue(todoRemoteState)

  const onLoad = () => {
    console.table(todos)
    setTodos((prev) => {
      const prevIds = prev.map((t) => t.id)
      return [...prev, ...todos.filter((t) => !prevIds.includes(t.id))]
    })
  }
  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ThemeSwitcher />
      <Button onClick={onLoad}>Load</Button>
    </Grid>
  )
}

export { Navbar }
