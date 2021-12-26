import { Button, Grid } from "@chakra-ui/react"
import { useTodoStoreActions } from "../stores/todoStore"
import { ThemeSwitcher } from "./ThemeSwitcher"

const Navbar = () => {
  const loadTodosRemote = useTodoStoreActions((s) => s.loadTodosRemote)
  const onLoad = () => {
    loadTodosRemote()
  }
  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ThemeSwitcher />
      <Button onClick={onLoad}>Load</Button>
    </Grid>
  )
}

export { Navbar }
