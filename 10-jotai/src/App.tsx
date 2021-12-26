import { ChakraProvider, Box, theme } from "@chakra-ui/react"
import { useAtom } from "jotai"
import { Suspense, useLayoutEffect } from "react"
import { Navbar } from "./components/Navbar"
import { TodoItemNew } from "./components/TodoItemNew"
import { TodoList } from "./components/TodoList"
import { todoState } from "./stores/todoStore"

const App = () => {
  return (
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
  )
}

const LogEvents = () => {
  const todos = useAtom(todoState)
  useLayoutEffect(() => {
    console.log("Commit phase - asynchronous")
  })
  console.log("Render phase - synchronous")
  return null
}

export { App }
