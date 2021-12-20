import { Button, Grid } from "@chakra-ui/react"
import { todo } from "../stores/todoStore"
import { ThemeSwitcher } from "./ThemeSwitcher"

type BarProps = {
  load: (todos: todo[]) => void
}
const Bar = ({ load }: BarProps) => {
  const onLoad = async () => {
    const resp = await fetch("https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json")
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

export { Bar }
