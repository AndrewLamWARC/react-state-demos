import { Idea } from "./reusable/Idea"
// import { useIdea } from "./reusable/ideaHook"
import { useSnapshot } from "valtio"
// import { createIdeaStore } from "./reusable/ideaState"
import { ideasStore } from "./reusable/ideasState"
// Stores can live above App
// const ideaOne = createIdeaStore()
// const ideaTwo = createIdeaStore()

function App() {
  // const ideaOne = useIdea()
  // const ideaTwo = useIdea()

  // const ideaOneSnap = useSnapshot(ideaOne)
  // const ideaTwoSnap = useSnapshot(ideaTwo)

  const snapshot = useSnapshot(ideasStore)

  return (
    <div className="app">
      {/* <Idea {...ideaOne} />
      <Idea {...ideaTwo} /> 
      <Idea {...ideaOneSnap} />
      <Idea {...ideaTwoSnap} />
      */}

      <div className="row">
        <button onClick={() => snapshot.addIdea()}>➕</button>
        <button onClick={() => snapshot.deleteIdea()}>➖</button>
      </div>

      {snapshot.ideas.map((ideaStore, i) => (
        <Idea key={i} {...ideaStore} />
      ))}

      <h3>
        Total Votes: {snapshot.ideas.reduce((total, ideaState) => total + ideaState.upVotes + ideaState.downVotes, 0)}
      </h3>
    </div>
  )
}

export default App
