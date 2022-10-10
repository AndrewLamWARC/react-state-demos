import { loadTodos, Todo, trackTodosRequestsStatus } from "./todoStore.repository"
import { tap } from "rxjs"
import { fromFetch } from "rxjs/fetch"

const todosUrl = "https://gist.githubusercontent.com/AndrewLamWARC/06226afcc5c45bd8eb45d10aabc76f30/raw/todos.json"

export const fetchTodos = () => {
  return fromFetch<Todo[]>(todosUrl, {
    selector: (response) => {
      console.log("fetchTodos")
      const todos = response.json()
      return todos
    }
  }).pipe(tap(loadTodos), trackTodosRequestsStatus("todos"))
}
