# React state management using valtio

<https://valtio-demo.pmnd.rs/>

Tagline: 💊 Valtio makes proxy-state simple for React and Vanilla

Weekly npm downloads: 8,922

Github stars: 3,400

Todo app with "global" state with valtio.

Valtio is authored by Daishi Kato, who is the author of other state management libraries like Zustand (state in German) and Jotai (state in Japanese)

Valtio turns any object, think store, into a self aware proxy.
Such that mutating the returned proxy would cause it to publish changes to subscribers.
These subscribers subscribes to a local snapshot that publishes changes.
Rule of thumb, mutate the proxy directly and read from snapshots.

Valtio supports react Suspense out of the box!

## Component hierarchy

    App <- Navbar

        <- TodoList <- TodoListItems <- [TodoItem]

        <- TodoItemNew

Another provider based state management system.
