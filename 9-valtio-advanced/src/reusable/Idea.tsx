export type IdeaProps = {
  value: string
  onValueChange: (value: string) => void

  upVotes: number
  downVotes: number
  rating: number
  onUpVote: () => void
  onDownVote: () => void
}

export const Idea = ({ value, onValueChange, upVotes, downVotes, rating, onUpVote, onDownVote }: IdeaProps) => {
  return (
    <div className="row">
      <input value={value} onChange={(e) => onValueChange(e.target.value)} />
      <button onClick={onUpVote}> Up 👍 </button>
      <button onClick={onDownVote}> Down 👎 </button>
      <span> 👍 ({upVotes})</span>
      <span> 👎 ({downVotes})</span>
      <span> ⭐ ({rating})</span>
    </div>
  )
}
