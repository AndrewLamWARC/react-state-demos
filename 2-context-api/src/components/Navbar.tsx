import { Button, Grid } from "@chakra-ui/react"
import { useTodoContext } from "../stores/todoStore"
import { ThemeSwitcher } from "./ThemeSwitcher"

export { Navbar }

const Navbar = () => {
  const { loadTodos: load } = useTodoContext()
  const onLoad = async () => {
    const resp = await fetch(
      "https://gist.githubusercontent.com/AndrewLamWARC/06226afcc5c45bd8eb45d10aabc76f30/raw/todos.json"
    )
    const todos = await resp.json()
    await load(todos)
  }
  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ThemeSwitcher />
      <Button onClick={onLoad}>Load</Button>
    </Grid>
  )
}
