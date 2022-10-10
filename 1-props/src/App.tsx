import { ChakraProvider, Box, theme } from "@chakra-ui/react"
import { Suspense, useLayoutEffect } from "react"
import { Navbar } from "./components/Navbar"
import { TodoItemNew } from "./components/TodoItemNew"
import { TodoList } from "./components/TodoList"
import { Todo, useTodos } from "./stores/todoStore"

const App = () => {
  // Creates state using useState and keep tracks of todos state high in the component hierarchy - here in the App component
  const ts = useTodos()

  return (
    <ChakraProvider theme={theme}>
      <Suspense fallback={<div>Fallback...</div>}>
        <Box maxWidth={"12xl"} margin="auto" p={5}>
          <Navbar load={ts.loadTodos} />
          <TodoList todos={ts.todos} toggleTodo={ts.toggleTodo} updateTodo={ts.updateTodo} deleteTodo={ts.deleteTodo} />
          <TodoItemNew addTodo={ts.addTodo} />
          <LogEvents todos={ts.todos} />
        </Box>
      </Suspense>
    </ChakraProvider>
  )
}

type LogEventProps = {
  todos: Todo[]
}
const LogEvents = ({ todos }: LogEventProps) => {
  console.table(todos)
  useLayoutEffect(() => {
    console.log("Commit")
  })
  console.log("Render")
  return null
}

export { App }
