import { useState } from "react"
import { IdeaProps } from "./Idea"

// Pro: Reusable business logic
// Con: Can only call hooks from top level. No conditionals, loops or nested functions
// Meaning we cannot dynamically create more hooks at callsite (App in this case)
export const useIdea = (): IdeaProps => {
  const [value, setValue] = useState("")
  const [upVotes, setUpVotes] = useState(0)
  const [downVotes, setDownVotes] = useState(0)
  const onUpVote = () => setUpVotes((v) => v + 1)
  const onDownVote = () => setDownVotes((v) => v + 1)
  const rating = upVotes - downVotes // derived state

  return {
    value,
    onValueChange: setValue,
    upVotes,
    downVotes,
    rating,
    onUpVote,
    onDownVote
  }
}
