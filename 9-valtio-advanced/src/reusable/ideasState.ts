import { IdeaProps } from "./Idea"
import { createIdeaStore } from "./ideaState"
import { proxy } from "valtio"

type IdeasStore = {
  ideas: IdeaProps[]
  addIdea: () => void
  deleteIdea: () => void
}

// This store uses singular IdeaStore
export const createIdeasStore = (): IdeasStore => {
  const state = proxy({
    ideas: [createIdeaStore()],
    addIdea: () => state.ideas.push(createIdeaStore()),
    deleteIdea: () => {
      if (state.ideas.length > 1) state.ideas.pop()
    }
  })

  return state
}

export const ideasStore = createIdeasStore()
