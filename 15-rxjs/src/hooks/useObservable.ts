import { useEffect, useState } from "react"
import { BehaviorSubject } from "rxjs"

// In production, use use-observable library instead of this hand written hook.
export const useObservable = <TState>(stateSubject: BehaviorSubject<TState>) => {
  const [state, setState] = useState(stateSubject.getValue())

  useEffect(() => {
    const subscription = stateSubject.subscribe((currentState) => {
      setState(currentState)
    })

    return () => subscription.unsubscribe()
  }, [])

  return state
}
