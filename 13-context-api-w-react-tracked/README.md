# Basic react state management using context api with **react-tracked**

<https://github.com/dai-shi/react-tracked>

Tagline: State usage tracking with Proxies. Optimize re-renders for useState/useReducer, Redux, Zustand and others.

Weekly npm downloads: 30,921

Github stars: 2.1k

Basic todo app with "global" state using react built-in context api

## Component hierarchy

    App <- Navbar

        <- TodoList <- TodoListItems <- [TodoItem]

        <- TodoItemNew

Introduces the first of many provider based state management system
