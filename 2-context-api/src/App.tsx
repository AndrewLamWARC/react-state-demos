import { ChakraProvider, Box, theme } from "@chakra-ui/react"
import { Suspense, useLayoutEffect } from "react"
import { Navbar } from "./components/Navbar"
import { TodoItemNew } from "./components/TodoItemNew"
import { TodoList } from "./components/TodoList"
import { TodoProvider, useTodoContext } from "./stores/todoStore"

export { App }

const App = () => {
  return (
    <TodoProvider>
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
    </TodoProvider>
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
