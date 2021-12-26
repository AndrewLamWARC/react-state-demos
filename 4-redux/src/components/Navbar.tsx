import { Button, Grid } from "@chakra-ui/react"
import { useAppDispatch } from "../hooks/useAppState"
import { loadTodosRemote } from "../stores/store"
import { ThemeSwitcher } from "./ThemeSwitcher"

const Navbar = () => {
  const dispatch = useAppDispatch()
  const onLoad = () => {
    loadTodosRemote(dispatch)
  }

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ThemeSwitcher />
      <Button onClick={onLoad}>Load</Button>
    </Grid>
  )
}

export { Navbar }
