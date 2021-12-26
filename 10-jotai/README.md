# React state management with jotai

<https://jotai.org/>

Tagline: 👻 Primitive and flexible state management for React

Weekly npm downloads: 40,213

Github stars: 6,500

Todo app with "global" state with jotai.

Jotai is another atom based state management library by Daishi Kato.

Compose atoms of state together to form store(s)

## Component hierarchy

    App <- Navbar

        <- TodoList <- TodoListItems <- [TodoItem]

        <- TodoItemNew
