# Basic react state management using context api with react-tracked

<https://reactjs.org/docs/context.html>

Tagline: React global state management with built in functionality.
State usage tracking with Proxies. Optimize re-renders for useState/useReducer, Redux, Zustand and others.

Weekly npm downloads: N/A

Github stars: N/A

Basic todo app with "global" state using react built-in context api

## Component hierarchy

    App <- Navbar

        <- TodoList <- TodoListItems <- [TodoItem]

        <- TodoItemNew

Introduces the first of many provider based state management system
