import { Button, Grid } from "@chakra-ui/react"
import { useStore } from "../stores/todoStore"
import { ThemeSwitcher } from "./ThemeSwitcher"

const Navbar = () => {
  const loadTodos = useStore((s) => s.loadTodos)
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
