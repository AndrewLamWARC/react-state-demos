import { Button, Grid } from "@chakra-ui/react"
import { useAtom } from "jotai"
import { loadTodosAtom } from "../stores/todoStore"
import { ThemeSwitcher } from "./ThemeSwitcher"

const Navbar = () => {
  const [, loadTodos] = useAtom(loadTodosAtom)

  const onLoad = () => {
    loadTodos()
  }
  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ThemeSwitcher />
      <Button onClick={onLoad}>Load</Button>
    </Grid>
  )
}

export { Navbar }
