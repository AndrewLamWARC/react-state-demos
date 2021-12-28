# react-state-demos

[<img align="left" width="10%" src="./assets/noun-office-man-2838664.svg">] Introduction to state management libraries suitable for react

## The need for state

UI = f(State)

The need for state in react is driven by a simple equation - "UI as a function of state". To put it another way, UI is dependent on state.

React was released by Facebook in 2013 as a UI/view only framework.
React was complemented by a data/state management framwork called flux to form a complete application framework.

So right from the start, there was already a separation between the UI and state part of the equation.

While react has gone on to dominate the UI space, flux has been supplanted by redux. Redux itself has been 'officially' supplanted by either context api with hooks or redux toolkit/RTK.

As the years has passed, the number of libraries to manage state has exploded. A search for "state management" on npmjs.com returns 2698 results as of 28/12/2021.
While a tiny percentage of these are libraries specific for managing forms and thus not state management libraries, it is still a tremendous number of libraries.

This repo is an attempt to review the state of state management libraries as of nearly 2022.

## Ambitions

Build a simple todo react app of just enough complexity to demonstrate the management of state using various libraries but not too complex to obscure the mechanism of each library.

I'm a big fan of learning through concrete examples so feel free to clone this repo and experiment for yourselves. I welcome PRs for refactors and bug fixes as well as PRs that clarify the documentation. PRs for adding new features would be carefully evaluated for usefulness and clarity against complexity.

These are the features I will initially implement in the todo app.

1. Add a todo task and expect the task to be added to UI.

2. Each "active" todo can be either "done" or "not dome". The doneness of each task can be toggled using a checkbox.

3. Delete a todo task and expect the task to be removed from UI.

4. Edit the text of an active todo task.

5. Load a list of todos asynchrously and remotely.

Many state libraries treat async tasks differently from sync tasks. For redux, the redux-thunk library is normally used to help process async tasks. Other libraries like redux-saga to handle async task. redux-saga has a fairly steep learning curve but it can handle more complex scenarios like undo/redo/retry of async tasks. Other libraries based on redux, like redux toolkit (RTK) and easy-peasy, integrates redux-thunk and there is no need for a separate install of redux-thunk - unlike "classic" redux.

Some libraries like mobx and zustand can handle async tasks without any need for external libraries.

Async actions, state libraries like redux normally cannot handle async actions alone. An additional library like react-thunk is needed to handle async actions.

State libraries can be classified between provider based and non-provider based. Provider based libraries frequently result in pyramid of a doom provider component tree. Needless to say, I prefer provider-less libraries, however the most common state management libraries are provider based.

## Demos

- [x] Prop drilling without libraries

- [x] Context api with hooks without libraries

- [x] Discussion of flux concepts

- [x] redux - classic implementation with hooks

- [x] mobx

- [x] redux toolkit

- [x] zustand

- [x] recoil

- [x] valtio

- [x] jotai

- [x] easy-peasy - redux wrapper

- [x] elf

- [ ] Context api with hooks and react-tracked to reduce re-renders and improve preformance when unrelated state changes

- [ ] xstate

- [ ] react-query

- [ ] Redux toolkit query

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

TodoItemNew is a component contains a textbox and add button to represent a new todo to be added to the store. Each character changed is saved into local state using useState. The add button is used to dispatch the locally saved text of the new todo to the store.

### Weaknesses

In a production system, the state of the todos would be stored centrally (single source of truth) on the backend. But this is not the case in these demos.

For production system, the initial load should load the state of the todos from the remote store on the backend.
Every action on the frontend should eventually be commited to the remote store.

If the state of the remote todo store can only be changed by user gestures on the frontend then there is no need to load todos from the remote store after the initial load. However, imagine a bulk job that runs on the backend to delete "old" todos, say todos 1 week or older. Then the frontend would need to have a strategy ensure consistency between the state in the remote store and the global store that lives in the frontend. Obviously we need to keep more state in the stores such as todo create date when we start talking about the age of a todo.

It should be clear that adding these domain requirements to the demos would add complexity. Which in turn would obscure the understanding of state management libraries. Thus, features have intentianally been left out.

## Acknowlegement

I draw my inspiration for this work from Jack Herrington's youtube series on state management libraries.

Jack is an excellent teacher and his way of explaining difficult subjects is unmatched. The code used in his videos are made public so you can watch his videos, understand the concepts in it's original code context which allows you to follow his line of reasoning exactly.

I urge you to watch, support, like and subscribe to his channel to learn more about react, state managment and programming in general.

## Local, global and remote states

Local react state can be handled with useState hook or setState in older class component.

Global state is state that needs to be shared amongst different components in the component tree.
Local state can become global if it is lifted up to a common parent and passed down to children either as direct props or through a context.

Remote state also called backend state. This was previously lumped together with global state but libraries like react-query has been released to separate remote state from global state. Look up Tanner Linsley's youtube videos, the author of react-query, to understand the need to differentiate between global and remote state.

Most state management libraries mainly handle global state and it was the dev's responsibility to ensure that global state is consistent with remote state. Newer libraries like Redux ToolKit query (RTK query), react-query and SWR was released to handle remote state.
