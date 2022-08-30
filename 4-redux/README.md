# React state management using classic redux

<a href='https://redux.js.org'><img src='https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67' height='60' alt='Redux Logo' aria-label='redux.js.org' /></a>

Tagline: A Predictable State Container for JS Apps

Weekly npm downloads: 4,931,043

Github stars: 57,200

Todo app with "global" state using redux in the classic way
Redux is losing popularity because of 3 criticisms with the classic approach.

1. Configuration of redux store is too complex

2. Too many packages (react-redux, react-thunk) needed to make redux useful

3. Boilerplate

Despite losing popularity recently, redux remains Facebook's reference implementation for react state management and continues to be the most popular react state management library by far so it is very important to understand

State flows are uni directional.
Redux has a single dispatcher, store and provider.

Actions are used to mutate state. These are defined as js objects with a string type and optional payload.
A common pattern in redux is to write "Action creators" to ease the creation of action. These are functions that accept an optional payload value and return a specific action.  

These actions are dispatched by the central dispatcher to the reducer(s). The cetral dispatcher is commonly called "dispatch".

A reducer is a pure function that accepts the current state and action as input and produces the next state. It is important that the reducer is pure, defined as not directly mutating the existing state but rather creating and returning the next state.
A big switch case is used to implement reducers to process next state based on the action dispatched to it.

The signature of the todo reducer function in typescript is:
type TodoReducer = (currentState: TodoStore, action: TodoAction) => TodoStore

Component instances consume classic redux state by connecting to redux store using the connect function and grabbing the specific property on the state. Then writing functions normally called mapStateToProps and/or mapDispatchToProps. mapStateToProps is used to get state from redux store. mapDispatchToProps is used to get the central dispatcher.
These properties can be both state and action creators.

I've cheated here and used hooks to improve the DX of using classic redux.
Specifically, I've used the useDispatch and useReducer hooks.
Using these hooks eases consuming redux state from the components.

## Component hierarchy

    App <- Navbar

        <- TodoList <- TodoListItems <- [TodoItem]

        <- TodoItemNew

A provider based state management system.
