import { ChakraProvider, Box, theme } from "@chakra-ui/react"
import { useLayoutEffect } from "react"
import { Bar } from "./components/Bar"
import { TodoItem } from "./components/TodoItem"
import { TodoList } from "./components/TodoList"
import { todo, useTodos } from "./stores/todoStore"

const App = () => {
  // Creates state using useState and keep tracks of todos state high in the component hierarchy - here in the App component
  const ts = useTodos()

  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth={"12xl"} margin="auto" p={5}>
        <Bar load={ts.load} />
        <TodoList todos={ts.todos} toggleTodo={ts.toggleTodo} updateTodo={ts.updateTodo} deleteTodo={ts.deleteTodo} />
        <TodoItem newTodo={ts.newTodo} setNewTodo={ts.setNewTodo} addTodo={ts.addTodo} />
        <LogEvents todos={ts.todos} />
      </Box>
    </ChakraProvider>
  )
}

type LogEventProps = {
  todos: todo[]
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
