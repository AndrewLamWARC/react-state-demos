# React state management with Elf

<https://ngneat.github.io/elf/>

Tagline: <img width="3%" height="3%" src="https://ngneat.github.io/elf/img/elf.png"> A Reactive Store with Magical Powers

Weekly npm downloads: 738

Github stars: 518

Todo app with "global" state with Elf.

Elf is a reactive immutable state management solution built on top of RxJS. It uses custom RxJS operators to query the state and pure functions to update it.

Elf encourages simplicity. It saves you the hassle of creating boilerplate code and offers powerful tools with a moderate learning curve, suitable for experienced and inexperienced developers alike.

rxjs is the foundation of Elf so I consider it the first truly reactive state management library in this list.
rxjs itself has a learning curve so Elf may not be suitable for a dev team that is not familiar with reactive programming.

To understand the overall concepts behind reactive programming and functional programming, I urge you to look up Erik Miejer's articles and videos on the subject. He was the principal behind LINQ and reactive extensions (rx.net) on which rxjs is based.

Known bug: you can only load the Todos from the server one time.

## Component hierarchy

    App <- Navbar
        
        <- TodoList <- TodoListItems <- [TodoItem]
        
        <- TodoItemNew
