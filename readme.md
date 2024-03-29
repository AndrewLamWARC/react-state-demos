# react-state-demos

<img align="center" width="8%" src="./assets/noun-office-man-2838664.svg">

Introduction to state management libraries suitable for react

## Running demos

1. Pre-requisites: node 14+

2. Clone this repository

3. cd into each demo

4. npm i && npm start

## The need for state

### UI = f(State)

The need for state in react is driven by a simple equation - "UI as a function of state". To put it another way, UI is dependent on state.

React was released by Facebook in 2013 as a UI/view only framework.
React was complemented by a data/state management framework called Flux, also by Facebook, to form a complete application framework.

Right from the start, there was already a separation between the UI and state part of the equation.

While react has gone on to dominate the UI space, flux has been supplanted by redux in the state management space. Redux itself has been 'officially' supplanted by either context api with hooks or redux toolkit/RTK.

As the years has passed, the number of libraries to manage react state has exploded. A search for "state management" on npmjs.com returns 2698 results as of 28/12/2021.
While a tiny percentage of these are libraries specific for managing forms and thus not state management libraries, that is still a tremendous number of state management libraries.

This repo is an attempt to review the state of state management libraries as of 2022.

## Aims

Build a simple todo react app with just enough complexity to demonstrate the management of state using various libraries but not too complex to obscure the mechanism of each library.

I'm a big fan of learning through concrete examples so feel free to clone this repo and experiment for yourselves. I welcome PRs for refactors and bug fixes as well as PRs that clarify the documentation. PRs for adding new features would be evaluated for usefulness and clarity against complexity.

These are the features I will initially implement in the todo app.

1. Add a todo task and expect the task to be added to UI.

2. Each "active" todo can be either "done" or "not done". The doneness of each task can be toggled using a checkbox.

3. Delete a todo task and expect the task to be removed from UI.

4. Edit the text of an active todo task.

5. Load a list of todos asynchrously and remotely.

Many state libraries treat async tasks differently from sync tasks. For redux, additional libraries like redux-thunk is normally used to help process async tasks. Libraries like redux-saga are also used to handle async tasks. redux-saga has a fairly steep learning curve but it can handle more complex scenarios like undo/redo/retry of async tasks. Other libraries based on redux, like redux toolkit (RTK) and easy-peasy already integrates redux-thunk so there is no need for a separate install of redux-thunk.

Some libraries like mobx, zustand and valtio can handle async tasks without any need for external libraries.

State libraries can be classified between provider based and non-provider based. Provider based libraries frequently result in pyramid of doom provider component tree.
I prefer provider-less libraries, however most common state management libraries are provider based.

## Demos

- [x] Prop drilling without libraries

- [x] Context api with hooks without libraries

- [x] Discussion of flux concepts

- [x] redux - classic implementation but with hooks

- [x] mobx

- [x] redux toolkit

- [x] zustand

- [x] recoil

- [x] valtio

- [x] jotai

- [x] easy-peasy - redux wrapper

- [x] elf

- [x] rxjs

- [x] Context api with hooks and react-tracked to reduce re-renders and improve preformance when unrelated state changes

- [x] xstate

- [ ] react-query - this deals with remote state. Others in the list currently deal with global (non-remote) state so the solution would be slightly different

- [ ] Redux toolkit query - this also deals with remote state. Should build upon the RTK solution above

## Todo app hierarchy

    App <- Navbar

        <- TodoList <- TodoListItems <- [TodoItem]

        <- TodoItemNew

App is the root element of the application.

Navbar is a direct child of App and contains 2 buttons. The Load button to allow asynchronous loading of remote todos into the app. The ThemeSwitcher allows theme to be switched between dark and light theme - the theme switcher is not important to these demos except to show that third party non-domain components can manage their own state outside your chosen state management library.

TodoList is a direct child of App and contains 2 components, the Header and TodoListItems.

TodoListItems maps over the current list of todos and creates an array of TodoItem representing each active todo.

TodoItem is a component that displays the text and done state of it's todo. The todo text is represented by a textbox that can be edited. Each character changed is dispatched to the todo store using actions in libraries implementing the flux architecture which in turn changes the todo in the store to the next state.
The todo done state is represented by a checkbox is used to show the done state and toggle the todo done state between done and notDone.

The TodoItemNew component contains a textbox and add button to represent a new todo to be added to the store. Each character changed is saved into local state using useState. The add button is used to dispatch the locally saved text of the new todo to the store.

### Weaknesses

In a production system, the state of the todos would be stored centrally (single source of truth) on the backend. But this is not the case in these demos.

For production system, the initial load should load the state of the todos from the remote store on the backend.
Every action on the frontend should eventually be persisted to the remote store.

If the state of the remote todo store can only be changed by user gestures on the frontend then there is no need to load all todos from the remote store after the initial load. However, imagine a bulk job that runs on the backend to delete "old" todos, say todos 1 week or older. Then the frontend would need to have a strategy ensure consistency between the state in the remote store and the global store that lives in the frontend. Obviously we then need to keep more state in the stores such as todo create date when we start talking about the age of a todo.

It should be clear that adding these domain requirements to the demos would add complexity. Which in turn would obscure the understanding of state management libraries. Thus, features have intentianally been left out.

## Acknowlegement

I draw my inspiration for this work from Jack Herrington's youtube series on state management libraries.

Jack is an excellent teacher and his way of explaining difficult subjects is unmatched. The code used in his videos are made public so you can watch his videos, understand the concepts in it's original context which allows you to follow his line of reasoning exactly.

Please watch, support, like and subscribe to his channel to learn more about react, state managment and programming in general.

## Client local, client global and server states

Client local react state can be handled with useState hook or setState in older class component.

Client global state is state that needs to be shared amongst different components in the component tree.
Client local state can become global if it is lifted up to a common parent and passed down to other children either as direct props or through a context.

Server state is also called remote state. This was previously lumped together with client global state and handled using all purpose state management libraries but newer libraries like react-query, SWR, RTK query has been released to specificaly manage server state. Look up Tanner Linsley's, the author of react-query, youtube videos to understand the need to differentiate between client and server state.

Most older state management libraries manage client global state and it was the dev's responsibility to ensure that state stays consistent with server state. The improvement in DX is worth it using these newer state management libraries if the app's requirement is to persist some state remotely - this is the usual case for most medium to large scale apps.

## My Wish list

DX vs UX tension

Good developer experiance with better than average user experiance

### Good UX

Good enough performance

### Good DX

1. Central store composed of slices of related sub stores. Something like: <br />

```
const rootStore = {
    todos: todoStore
    auth: authStore
    profile: profileStore
}
```

2. Not too much boilerplate

3. One custom hook to consume each sub store's state and actions to modify state in components. The disadvantage of hooks is that they cannot be created conditionally or in loops. Keep this in mind.
