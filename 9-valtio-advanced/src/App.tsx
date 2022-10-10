import { Idea } from "./reusable/Idea"
// import { useIdea } from "./reusable/ideaHook"
import { useSnapshot } from "valtio"
// import { createIdeaStore } from "./reusable/ideaState"
import { IdeasContext, ideasStore } from "./reusable/ideasState"
import { useContext } from "react"
// Stores can live above App
// const ideaOne = createIdeaStore()
// const ideaTwo = createIdeaStore()

function App() {
  // const ideaOne = useIdea()
  // const ideaTwo = useIdea()

  // const ideaOneSnap = useSnapshot(ideaOne)
  // const ideaTwoSnap = useSnapshot(ideaTwo)

  const snapshot = useSnapshot(ideasStore)

  // Example of how to use valtio with context
  // const state = useContext(IdeasContext)
  // const snapshot = useSnapshot(state)
  return (
    <div className="app">
      {/* <Idea {...ideaOne} />
      <Idea {...ideaTwo} /> 
      <Idea {...ideaOneSnap} />
      <Idea {...ideaTwoSnap} />
      */}

      <div className="row">
        {/* dynamically add more 'ideas' */}
        <button onClick={() => snapshot.addIdea()}>➕</button>

        {/* dynamically delete 'ideas' */}
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
