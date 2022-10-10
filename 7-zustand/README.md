# React state management using zustand

<https://zustand.surge.sh/>

Tagline: 🐻 Bear necessities for state management in React

Weekly npm downloads: 188,789

Github stars: 12,400

Todo app with "global" state zustand.

Zustand is my favorite state management library by Daishi Kato.
It's simple to understand yet powerful and typescript friendly.
It took me less than 1/2 hour to convert the redux based todo to zustand.

Devs have different interpretation of simple.
So I say stores written with zustand results in code that is smaller, tighter and easier to reason about.

This is the first state management library that is **not** provider based.
Provider based state libraries tend to result in the pyramid of doom jsx code.

Imagine a system that need stores for Auth, Profile, Theme, and the rest of the domain's system.
Each store requires it's own provider and will result in an additional level of nesting.
I must mention that redux is provider based but has 1 provider for it's 1 central store which can be divided into "slices" with redux toolkit.

App <- Navbar

    <- TodoList <- TodoListItems <- [TodoItem]

    <- TodoItemNew
