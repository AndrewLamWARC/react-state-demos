import { Button, Grid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { fetchTodos } from "../stores/todos.service"
import { Observable, Subscription } from "rxjs"
import { Todo } from "../stores/todoStore.repository"
import { ThemeSwitcher } from "./ThemeSwitcher"

const Navbar = () => {
  const [load, setLoad] = useState<() => Observable<Todo[]>>()

  useEffect(() => {
    let s: Subscription
    if (load) {
      s = load().subscribe()

      return () => s.unsubscribe()
    }
  }, [load])

  const onLoad = () => {
    console.log("Calling onLoad")
    setLoad(() => fetchTodos)
    console.log("Called onLoad")
  }

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ThemeSwitcher />
      <Button onClick={onLoad}>Load</Button>
    </Grid>
  )
}

export { Navbar }
