import { ChakraProvider, Box, theme } from "@chakra-ui/react"
import { Suspense, useLayoutEffect } from "react"
import { Navbar } from "./components/Navbar"
import { TodoItemNew } from "./components/TodoItemNew"
import { TodoList } from "./components/TodoList"
import { todoStore } from "./stores/todoStore"
import { StoreProvider } from "easy-peasy"

const App = () => {
  return (
    <StoreProvider store={todoStore}>
      <ChakraProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <Box maxWidth={"12xl"} margin="auto" p={5}>
            <Navbar />
            <TodoList />
            <TodoItemNew />
            <LogEvents />
          </Box>
        </Suspense>
      </ChakraProvider>
    </StoreProvider>
  )
}

const LogEvents = () => {
  useLayoutEffect(() => {
    console.log("Commit phase - asynchronous")
  })
  console.log("Render phase - synchronous")
  return null
}

export { App }
