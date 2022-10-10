import { createContext, ReactNode, useRef } from "react"
import { IdeaProps } from "./Idea"
import { createIdeaStore } from "./ideaState"
import { proxy } from "valtio"

type IdeasStore = {
  ideas: IdeaProps[]
  addIdea: () => void
  deleteIdea: () => void
}

// This store uses a singular IdeaStore
export const createIdeasStore = (): IdeasStore => {
  const state = proxy({
    ideas: [createIdeaStore()],
    addIdea: () => state.ideas.push(createIdeaStore()), // In this implementation, we can only push new ideas
    deleteIdea: () => {
      if (state.ideas.length > 1) state.ideas.pop() // In this implementation, we pop off ideas from top and delete
    }
  })

  return state
}

export const ideasStore = createIdeasStore()

// We can also combine our global ideasStore with context. But I don't like it
export const IdeasContext = createContext(ideasStore)

type IdeasProviderProp = {
  children: ReactNode
}
const IdeasProvider = ({ children }: IdeasProviderProp) => {
  const state = useRef(proxy(ideasStore)).current
  return <IdeasContext.Provider value={state}>{children}</IdeasContext.Provider>
}
