import { Button, Grid } from "@chakra-ui/react"
import { useStoreContext } from "../stores/todoStore"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { observer } from "mobx-react-lite"

const Navbar = observer(() => {
  const { todoListStore } = useStoreContext()

  const onLoad = () => {
    todoListStore.loadTodos()
  }

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ThemeSwitcher />
      <Button onClick={onLoad}>Load</Button>
    </Grid>
  )
})

export { Navbar }
