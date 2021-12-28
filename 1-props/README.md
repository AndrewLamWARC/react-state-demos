# Basic react state management using props only

Tagline: React global state management with built in functionality

<https://reactjs.org/docs/lifting-state-up.html>

Weekly npm downloads: N/A

Github stars: N/A

Basic todo app with "global" state lifted up to parent App component

- Lift state up the component hierarchy

- Pass state down as props

- Pass action down as props

- Child components hook up actions from parent

## Component hierarchy

    App <- Navbar

        <- TodoList <- TodoListItems <- [TodoItem]

        <- TodoItemNew
