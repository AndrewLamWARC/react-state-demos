import { ChakraProvider, Box, theme } from "@chakra-ui/react"
import { useLayoutEffect } from "react"
import { Bar } from "./components/Bar"
import { TodoItem } from "./components/TodoItem"
import { TodoList } from "./components/TodoList"
import { TodoProvider, useTodoContext } from "./stores/todoStore"

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <TodoProvider>
        <Box maxWidth={"12xl"} margin="auto" p={5}>
          <Bar />
          <TodoList />
          <TodoItem />
          <LogEvents />
        </Box>
      </TodoProvider>
    </ChakraProvider>
  )
}

const LogEvents = () => {
  const { todos } = useTodoContext()
  console.table(todos)
  useLayoutEffect(() => {
    console.log("Commit")
  })
  console.log("Render")
  return null
}

export { App }
