import { Button, Grid } from "@chakra-ui/react"
import { todoStore } from "../stores/todoStore"
import { useSnapshot } from "valtio"
import { ThemeSwitcher } from "./ThemeSwitcher"

const Navbar = () => {
  const todosSnap = useSnapshot(todoStore)

  const onLoad = () => {
    todosSnap.loadTodos()
  }

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ThemeSwitcher />
      <Button onClick={onLoad}>Load</Button>
    </Grid>
  )
}

export { Navbar }
