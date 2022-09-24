import { ChakraProvider, Box, theme } from "@chakra-ui/react"
import { Suspense, useContext, useLayoutEffect } from "react"
import { Navbar } from "./components/Navbar"
import { TodoItemNew } from "./components/TodoItemNew"
import { TodoList } from "./components/TodoList"
import { ApplicationProvider, useApplicationContext } from "./machines/todosMachine"

export { App }

const App = () => {
  return (
    <ApplicationProvider>
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
    </ApplicationProvider>
  )
}

const LogEvents = () => {
  const { todos } = useApplicationContext()
  console.table(todos)

  useLayoutEffect(() => {
    console.log("Commit phase - synchronous")
  })
  console.log("Render phase - asynchronous")
  return null
}
