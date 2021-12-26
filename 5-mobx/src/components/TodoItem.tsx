import { Input, Checkbox } from "@chakra-ui/react"
import { Todo } from "../stores/todoStore"
import { observer } from "mobx-react-lite"
import { ChangeEvent, useCallback } from "react"

type TodoItemProps = {
  todo: Todo
}

export const TodoItem = observer(({ todo }: TodoItemProps) => {
  //   const onToggle = useCallback(() => {
  //     todo.toggleDone()
  //   }, [todo])
  const onToggle = () => {
    console.log("Toggle!")
    todo.toggleDone()
  }

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      todo.setText(e.target.value)
    },
    [todo]
  )

  return (
    <>
      <Checkbox onChange={onToggle} checked={todo.done} defaultChecked={todo.done} />
      <Input mx={2} value={todo.text} onChange={onChange} textDecoration={todo.done ? "line-through" : ""} />
    </>
  )
})
