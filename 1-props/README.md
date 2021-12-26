# Basic react state management using props only

Tagline: React global state management with built in functionality

<https://reactjs.org/docs/lifting-state-up.html>

Weekly npm downloads: N/A

Github stars: N/A

Basic todo app with "global" state lifted up to parent App component

## Component hierarchy

    App <- Navbar

        <- TodoList <- TodoListItems <- [TodoItem]

        <- TodoItemNew
