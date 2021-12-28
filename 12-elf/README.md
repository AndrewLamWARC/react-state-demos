# React state management with Elf

<https://ngneat.github.io/elf/>

Tagline: <img width="3%" height="3%" src="https://ngneat.github.io/elf/img/elf.png"> A Reactive Store with Magical Powers

Weekly npm downloads: 738

Github stars: 518

Todo app with "global" state with Elf.

Elf is a reactive immutable state management solution built on top of RxJS. It uses custom RxJS operators to query the state and pure functions to update it.

Elf encourages simplicity. It saves you the hassle of creating boilerplate code and offers powerful tools with a moderate learning curve, suitable for experienced and inexperienced developers alike.

rxjs is the foundation of Elf so I consider it the first truly reactive state management library in this list.
rxjs itself has a learning curve so Elf may not be suitable for a dev team that is not familiar with reactive programming

## Component hierarchy

    App <- Bar
        
        <- TodoList <- TodoListItems
        
        <- TodoItem
