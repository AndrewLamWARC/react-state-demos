# React state management using redux toolkit

<https://redux.js.org/>

Tagline: A Predictable State Container for JS Apps

Weekly npm downloads: 4,931,043

Github stars: 57,200

Todo app with "global" state using redux toolkit or RTK

Redux is the most popular js state management library and of the flux architecture and **Redux toolkit is considered a modern take on redux with less boilerplate code and is the recommended way to write an app with redux**

Flux eshews MVC in favour of unidirectionaly data flow - easy to reason about the change in state
Actions are created with action creators and dispatched with a central dispatcher to the various stores holding application state.
With redux, there is one central store. Later, this central store idea is refined by RTK and split up into various composed slices of state

Each component that need state consumes reactive state from the central state via selectors.
Each component that mutate state using actions dispatched to the central dispatcher.

However, classic redux has fallen out of favour for 3 reasons.

1. Configuration of redux store is too complex

2. Too many packages (react-redux, react-thunk) needed to make redux useful

3. Boilerplate

## Component hierarchy

    App <- Navbar

        <- TodoList <- TodoListItems <- [TodoItem]

        <- TodoItemNew

Another provider based state management system
