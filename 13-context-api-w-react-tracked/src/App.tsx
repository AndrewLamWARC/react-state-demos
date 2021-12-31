import { ChakraProvider, Box, theme } from "@chakra-ui/react"
import { Suspense, useLayoutEffect } from "react"
import { Navbar } from "./components/Navbar"
import { TodoItemNew } from "./components/TodoItemNew"
import { TodoList } from "./components/TodoList"
import { Provider, useTodos } from "./stores/todoStore"

export { App }

const App = () => {
  return (
    <Provider>
      <ChakraProvider theme={theme}>
        <Suspense fallback={<div>Fallback...</div>}>
          <Box maxWidth={"12xl"} margin="auto" p={5}>
            <Navbar />
            <TodoList />
            <TodoItemNew />
            <LogEvents />
          </Box>
        </Suspense>
      </ChakraProvider>
    </Provider>
  )
}

const LogEvents = () => {
  const { todos } = useTodos()
  console.table(todos)

  useLayoutEffect(() => {
    console.log("Commit phase - synchronous")
  })
  console.log("Render phase - asynchronous")
  return null
}
