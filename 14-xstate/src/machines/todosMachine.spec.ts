import { interpret } from "xstate"
import { done } from "xstate/lib/actions"
import { todosMachine, TodosMachineContext } from "./todosMachine"

describe("todosmachine", () => {
  it("should create new todo", () => {
    let context: TodosMachineContext
    const service = interpret(todosMachine)
      .onTransition((state) => (context = state.context))
      .start()

    service.send("addTodo", { text: "Shower" })
    expect(context!.newTodoText).toBe("")
    expect(context!.todos.length).toBe(1)
    expect(context!.todos[0].text).toBe("Shower")
  })

  it("should create 2 new todos", () => {
    let context: TodosMachineContext
    const service = interpret(todosMachine)
      .onTransition((state) => (context = state.context))
      .start()

    service.send("addTodo", { text: "Shower" })
    service.send("addTodo", { text: "Shave" })
    expect(context!.newTodoText).toBe("")
    expect(context!.todos.length).toBe(2)
    expect(context!.todos[0].text).toBe("Shower")
    expect(context!.todos[1].text).toBe("Shave")
  })

})
