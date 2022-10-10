# React state management with todo app using flux

<https://facebook.github.io/flux/>

Tagline: Application architecture for building user interfaces

Weekly npm downloads: 319,814

Github stars: 17,200

Flux is the original state management system released by facebook for building client-side web apps and released around the same time as react.
It complemented react's composible view components using a uni directional data flow with the now familiar action/action creator, dispatcher, store and view pattern. This was quite different from the bi directional data flow common at that time with "data binding"
Briefly, fb was having recurring bugs with their incorrect count in their messages read component. bi directional data flow with a big component hierarchy tend to kick off a storm of updates that was difficult to reason about

Although, there are still over 300k weekly downloads for flux library, these days flux has been surplanted by redux/context api/mobx and is of interest only for historical or legacy reasons

This pioneered the state management system "provider" with a flux util called container.
