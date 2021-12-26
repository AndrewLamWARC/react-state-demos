import { ChakraProvider, Box, theme } from "@chakra-ui/react"
import { useLayoutEffect } from "react"
import { Navbar } from "./components/Navbar"
import { TodoItemNew } from "./components/TodoItemNew"
import { TodoList } from "./components/TodoList"
import { Provider } from "react-redux"
import { store } from "./stores/store"

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Box maxWidth={"12xl"} margin="auto" p={5}>
          <Navbar />
          <TodoList />
          <TodoItemNew />
          <LogEvents />
        </Box>
      </Provider>
    </ChakraProvider>
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
