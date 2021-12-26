# React state management using mobx

<https://mobx.js.org/>

Tagline: Anything that can be derived from the application state, should be. Automatically.

Weekly npm downloads: 583,196

Github stars: 27,400

Todo app with "global" state using mobx.
Mobx is one of my personal favorite state management libraries.
However it took me almost half a day to convert the redux based todo app to mobx.
This was no fault of mobx, I expected the individual todos to be observable in a list of observable todos - like toggling the "done" state of a todo. Turns out the todo itself needs to ba made observable and have a store representing each todo as well as the usual store for a list of todos.

I'll be using functional mobx stores where possible as opposed to class based stores.
Functional store is possible with mobx 6.

## Component hierarchy

    App <- Navbar

        <- TodoList <- TodoListItems <- [TodoItem]

        <- TodoItemNew

Another provider based state management system.
