# React state management using rxjs - cloned from valtio

Rxjs is not strictly a state management library but ...

<hhttps://rxjs.dev/>

Tagline: RxJS: Reactive Extensions For JavaScript

Weekly npm downloads: N/A

Github stars: 27.8k

Todo app with "global" state with rxjs.

The todo$ global observable is stored in todoStore.todos$. It is a BehaviourSubject which means it is both an observable and observer.
Components like TodoListItems **react** to changes to todos$ via a subscription with the useObservable hook on todoStore.todos$. And rerenders.

Components that mutate the state of todo$ does so via actions in the todoStore - like addTodo(), updateTodo(), deleteTodo().
These actions causes a new todo list to be emitted via todos$.next() and causing subscribers of todos$ to rerender.

My implementation is a bit clunky "on change", I get the current todos using todos$.getValue() then change it and push next() value into the observable.

## Component hierarchy

    App <- Navbar

        <- TodoList <- TodoListItems <- Array<TodoItem>

        <- TodoItemNew

Another provider based state management system.
