import { ChakraProvider, Box, theme } from "@chakra-ui/react"
import { Suspense, useLayoutEffect } from "react"
import { Navbar } from "./components/Navbar"
import { TodoItemNew } from "./components/TodoItemNew"
import { TodoList } from "./components/TodoList"
import { Provider } from "react-redux"
import { rootStore } from "./stores/rootStore"

const App = () => {
  return (
    <Provider store={rootStore}>
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
    </Provider>
  )
}

const LogEvents = () => {
  useLayoutEffect(() => {
    console.log("Commit")
  })
  console.log("Render")
  return null
}

export { App }
