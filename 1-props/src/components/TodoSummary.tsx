import { Button, Flex, Text } from "@chakra-ui/react"
// import { filterTodosType, Todo } from "../stores/todoStore"

// export { TodoItemSummary }

// type TodoItemSummaryProps = {
//   todos: Todo[]
//   filterTodos: filterTodosType
// }

// const TodoItemSummary = ({ todos, filterTodos }: TodoItemSummaryProps) => {
//   return (
//     <Flex pt={2}>
//       <Button
//         mx={2}
//         onClick={() => {
//           filterTodos("all")
//         }}
//       >
//         All
//         <Text mx={1} fontSize="xs" transform="translateY(10%)">
//           {todos.length}
//         </Text>
//       </Button>
//       <Button
//         mx={2}
//         onClick={() => {
//           filterTodos("done")
//         }}
//       >
//         Done
//         <Text mx={1} fontSize="xs" transform="translateY(10%)">
//           {todos.filter((t) => t.done).length}
//         </Text>
//       </Button>
//       <Button
//         mx={2}
//         onClick={() => {
//           filterTodos("notDone")
//         }}
//       >
//         Not Done
//         <Text mx={1} fontSize="xs" transform="translateY(10%)">
//           {todos.filter((t) => !t.done).length}
//         </Text>
//       </Button>
//     </Flex>
//   )
// }
