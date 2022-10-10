# React state management with easy-peasy

<https://easy-peasy.dev/>

Tagline: Vegetarian friendly state for React

Weekly npm downloads: 23,419

Github stars: 4,500

Todo app with "global" state with easy-peasy.
Easy-peasy like redux toolkit is a library built on top of redux to address the critisms leveled at classic redux.

Looks like maintainer of easy-peasy (ctrlplusb) is a one person band and support for react 18 was slow to land. It does not looks like easy-peasy supports react Suspense yet 10/10/2022

## Component hierarchy

    App <- Navbar
        
        <- TodoList <- TodoListItems <- [TodoItem]
        
        <- TodoItemNew

Another provider based state management system.
