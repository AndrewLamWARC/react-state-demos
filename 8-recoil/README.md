# React state management using recoil

<https://recoiljs.org/>

Tagline: A state management library for React

Weekly npm downloads: 144,849

Github stars: 15,300

Todo app with "global" state using recoil.
Recoil is a brand new library and comes out of Facebook just like react and redux.
It is one of the first atom based state management library.
Atoms can either describe values that change together like a list of Todo items or the text and done properties of one Todo item.
Recoil supports react Suspense natively.

The main use case of recoil seems to be apps with a large number of individual atoms of state.
Like apps used for visualization

Think of atoms as enabling getter and setters of reactive values in global state.

## Component hierarchy

    App <- Navbar

        <- TodoList <- TodoListItems <- [TodoItem]

        <- TodoItemNew

Another provider based state management system. I think RecoilRoot is the provider

## Todo

Isolate business logic in todoStore. Right now logic is spread i=out in various component.
Write custom hooks to achieve aim
