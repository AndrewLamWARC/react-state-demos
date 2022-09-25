import { IdeaProps } from "./Idea"
import { proxyWithComputed } from "valtio/utils"

export const createIdeaStore = (): IdeaProps => {
  const state = proxyWithComputed(
    {
      value: "",
      onValueChange: (value: string) => (state.value = value),
      upVotes: 0,
      downVotes: 0,
      onUpVote: () => (state.upVotes = state.upVotes + 1),
      onDownVote: () => (state.downVotes = state.downVotes + 1)
    },
    {
      rating: (snapshot) => snapshot.upVotes - snapshot.downVotes
    }
  )

  return state
}
