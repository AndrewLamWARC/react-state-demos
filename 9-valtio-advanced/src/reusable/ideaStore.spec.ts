import { createIdeaStore } from "./ideaState"

describe("createIdeaState", () => {
  it("should have default values", () => {
    const store = createIdeaStore()
    expect(store.value).toBe("")
    expect(store.upVotes).toBe(0)
    expect(store.downVotes).toBe(0)
    expect(store.rating).toBe(0)
  })

  it("can change Idea value", () => {
    const store = createIdeaStore()
    const expectedValue = "Valtio"
    expect(store.value).toBe("")

    store.onValueChange(expectedValue)
    expect(store.value).toBe(expectedValue)
  })

  it("can upVote and downVote", () => {
    const store = createIdeaStore()

    store.onUpVote()
    store.onUpVote()
    store.onUpVote()
    expect(store.downVotes).toBe(0)
    expect(store.upVotes).toBe(3)
    expect(store.rating).toBe(3)
    store.onDownVote()
    expect(store.downVotes).toBe(1)
    expect(store.upVotes).toBe(3)
    expect(store.rating).toBe(2)
  })
})
