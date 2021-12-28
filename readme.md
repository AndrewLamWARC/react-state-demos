# react-state-demos

Introduction to state management libraries suitable for react

## The need for state

UI = f(State)

The need for state in react is driven by a simple equation - "UI as a function of state". To put it another way, UI is dependent on state.

React was released by Facebook in 2013 as a UI/view only framework.
React was complemented by a data/state management framwork called flux to form a complete application framework.

So right from the start, there was already a separation between the UI and state part of the equation.

While react has gone on to dominate the UI space, flux has been supplanted by redux. Redux itself has been 'officially' supplanted by either context api with hooks or redux toolkit/RTK.

As the years has passed, the number of libraries to manage state has exploded. A search for "state management" on npmjs.com returns 2698 results as of 28/12/2021.
While a tiny percentage of these are libraries specific for managing forms and thus not true state management libraries, this is still a tremendous number of true state management libraries.

This repo is an attempt to review the state of state management libraries as of nearly 2022.

## Ambitions

Build a simple todo react app of just enough complexity to demonstrate the management of state using various libraries but not too complex to obscure the mechanism of each library.

I'm a big fan of learning through concrete examples so feel free to clone this repo and experiment for yourselves. I welcome PRs for bug fixes. PRs for new features would be carefully evaluated for complexity.

These are the features I will initially implement in the todo app.

1. Add a todo task and expect the task to be added to UI.

2. Each "active" todo can be either "done" or "not dome". The doneness of each task can be toggled using a checkbox.

3. Delete a todo task and expect the task to be removed from UI.

4. Edit the text of an active todo task.

5. Load a list of todos asynchrously and remotely.

Many state libraries treat async tasks differently from sync tasks. For redux, the redux-thunk library is normally used to help process async tasks. Other libraries like redux-saga to handle async task. redux-saga has a fairly steep learning curve but it can handle more complex scenarios like undo/redo/retry of async tasks. Other libraries based on redux, like redux toolkit (RTK) and easy-peasy, integrates redux-thunk and there is no need for a separate install of redux-thunk - unlike "classic" redux.

Some libraries like mobx and zustand can handle async tasks without any need for external libraries.

Async actions, state libraries like redux normally cannot handle async actions alone. react-thunk needed to handle async

State libraries can be classified between provider based and non-provider based. Provider based libraries frequently result in pyramid of a doom provider component tree

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

- [ ] xstate

- [ ] react-query

## TODO

Discuss the various kinds of state in react apps and make it clear that state management libraries mainly handle global state.

Local react state can be handled with useState hook or setState in older class component.

Global state is state that needs to be shared amongst different components in the component tree.
Local state can become global if it is lifted up to a common parent and passed down to children either as direct props or through a context.

Remote state also called backend state. This was previously lumped together with global state but libraries like react-query has been released to separate remote state from global state.

Local state, global state and remote state
