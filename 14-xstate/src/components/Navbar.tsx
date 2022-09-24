import { Button, Grid } from "@chakra-ui/react"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { useApplicationContext } from "../machines/todosMachine"

export { Navbar }

const Navbar = () => {
  const { loadTodosRemote } = useApplicationContext()

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ThemeSwitcher />
      <Button onClick={loadTodosRemote}>Load</Button>
    </Grid>
  )
}
